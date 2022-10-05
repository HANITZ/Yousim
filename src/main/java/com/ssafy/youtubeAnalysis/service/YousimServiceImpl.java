package com.ssafy.youtubeAnalysis.service;

import com.google.gson.JsonObject;
import com.ssafy.youtubeAnalysis.entity.*;
import com.ssafy.youtubeAnalysis.repository.*;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import scala.Tuple2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.*;


@Service("yousimService")
public class YousimServiceImpl implements YousimService {
    @Autowired
    ChannelMSRepository channelMSRepository;

    @Autowired
    VideoMSRepository videoMSRepository;

    @Autowired
    StatusRepository statusRepository;

    @Autowired
    ChannelListRepository channelListRepository;

    @Autowired
    WordAnalysisService wordAnalysisService;

    @Autowired
    TrendRepository trendRepository;

<<<<<<< HEAD
    public static final String KEY = "AIzaSyApWxzJlO3StEluRVaqtiCA5D0Q502j-g4";
=======
    public static final String KEY = "AIzaSyCwZLiaryLMYl3kQtUd6aTN6nPVAMIvwfY";
>>>>>>> e90cdd7b1863c1ee3e7fdd4c2a0c0a58aea7c6b8

    static SparkConf sparkConf = new SparkConf().setAppName("simpleTest01")
            .setMaster("local").set("spark.driver.allowMultipleContexts", "true");

    static JavaSparkContext sparkContext = new JavaSparkContext(sparkConf);

    @Override
    @Transactional(isolation = Isolation.REPEATABLE_READ, rollbackFor = {RuntimeException.class, Exception.class})
    public void saveChannelMS(String id) throws Exception {
        Optional<Status> check = statusRepository.findById(id);

        if (check.isPresent() && Objects.equals(check.get().getStatus(), "갱신 중")) {
            return;
        }


        Status ST = Status.builder()
                ._id(id)
                .status("갱신 중")
                .time(new Date())
                .build();
        statusRepository.save(ST);


        String apiurl = "https://www.googleapis.com/youtube/v3/search";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&type=video&maxResults=5&videoEmbeddable=true&order=date";
        apiurl += "&channelId=" + id;

        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        con.setDoOutput(true);

        BufferedReader br=null;
        try {
            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        } catch (Exception e) {
            statusRepository.deleteById(id);
        }

        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(response.toString());

        JSONObject jsonMain = (JSONObject) obj;
        JSONArray jsonArr = (JSONArray) jsonMain.get("items");

        VideoToChannel result;
        float sum = 0;
        int cnt = 0;
        JavaPairRDD<String, Integer> keyword = null;

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject VideoId = (JSONObject) jsonObj.get("id");
                result = saveVideoMS((String) VideoId.get("videoId"));
                sum += result.getSum();
                cnt += result.getCnt();
                if (i == 0)
                    keyword = result.getKeywords();
                else
                    keyword = keyword.union(result.getKeywords()).reduceByKey((amount, value) -> amount + value);
            }
        }

        JSONArray keywords = new JSONArray();
        keyword.take(5000).forEach(tuple -> {
            JSONObject temp = new JSONObject();
            temp.put("text", tuple._1());
            temp.put("value", tuple._2());
            keywords.add(temp);
        });

        ChannelMinsim CM = ChannelMinsim.builder()
                ._id(id)
                .MS(sum / cnt)
                .keywords(keywords)
                .build();

        ST = Status.builder()
                ._id(id)
                .status("갱신 완료")
                .time(new Date())
                .build();

        channelMSRepository.save(CM);
        statusRepository.save(ST);
    }

    @Override
    @Transactional(isolation = Isolation.REPEATABLE_READ, rollbackFor = {RuntimeException.class, Exception.class})
    public VideoToChannel saveVideoMS(String id) throws Exception {
        Optional<Status> check = statusRepository.findById(id);

        if (check.isPresent() && Objects.equals(check.get().getStatus(), "갱신 중")) {
            return null;
        }

        Status ST = Status.builder()
                ._id(id)
                .status("갱신 중")
                .time(new Date())
                .build();
        statusRepository.save(ST);

        String apiurl = "https://www.googleapis.com/youtube/v3/commentThreads";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&maxResults=10";
        apiurl += "&videoId=" + id;


        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        BufferedReader br=null;
        try {
            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        } catch (Exception e) {
            statusRepository.deleteById(id);
        }
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();
        // 끝

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(response.toString());

        JSONObject jsonMain = (JSONObject) obj;

        JSONArray jsonArr1 = (JSONArray) jsonMain.get("items");
        float sum = 0;
        List<String> comments = new ArrayList<>();
        int data = 0;
        if (jsonArr1.size() > 0) {
            for (int i = 0; i < jsonArr1.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr1.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject topLevelComment = (JSONObject) snippet.get("topLevelComment");
                JSONObject snippet2 = (JSONObject) topLevelComment.get("snippet");
                comments.addAll(wordAnalysisService.doWordAnalysis((String) snippet2.get("textDisplay")));

                apiurl = "http://43.200.1.125:5000/?data=" + URLEncoder.encode((String) snippet2.get("textDisplay"), "UTF-8");


                url = new URL(apiurl);
                con = (HttpURLConnection) url.openConnection();
                con.setRequestMethod("GET");


                try {
                    br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
                } catch (Exception e) {
                    statusRepository.deleteById(id);
                }
                response = new StringBuffer();
                while ((inputLine = br.readLine()) != null) {
                    response.append(inputLine);
                }
                br.close();
                String temp = response.toString().replace("%", "");
                float temp2 = Float.parseFloat(temp);
                float erase = 36.05f;


                String str =(String) snippet2.get("textDisplay");

                System.out.println(" erase 값 : "+erase + "  민심%값 : "   + temp2 + " 댓글 뭐냐 : "+str);

                if (Float.compare(temp2, erase)==0) {

                    data++;
                    System.out.println("data값 : "+data);
                    continue;
                }
//                if (Float.parseFloat(temp) >= 50)
//                    sum += 100;
//                else
//                    sum += 0;
//                sum+=Float.parseFloat(temp);
                sum+=Float.parseFloat(temp);

            }


        }

        apiurl = "https://www.googleapis.com/youtube/v3/commentThreads";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&maxResults=10&order=relevance";
        apiurl += "&videoId=" + id;


        url = new URL(apiurl);
        con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));

        response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();
        // 끝

        parser = new JSONParser();
        obj = parser.parse(response.toString());

        jsonMain = (JSONObject) obj;

        JSONArray jsonArr2 = (JSONArray) jsonMain.get("items");


        if (jsonArr2.size() > 0) {

            for (int i = 0; i < jsonArr2.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr2.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject topLevelComment = (JSONObject) snippet.get("topLevelComment");
                JSONObject snippet2 = (JSONObject) topLevelComment.get("snippet");
                comments.addAll(wordAnalysisService.doWordAnalysis((String) snippet2.get("textDisplay")));

                apiurl = "http://43.200.1.125:5000/?data=" + URLEncoder.encode((String) snippet2.get("textDisplay"), "UTF-8");


                url = new URL(apiurl);
                con = (HttpURLConnection) url.openConnection();
                con.setRequestMethod("GET");

                br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
                response = new StringBuffer();
                while ((inputLine = br.readLine()) != null) {
                    response.append(inputLine);
                }
                br.close();
                String temp = response.toString().replace("%", "");
                float erase = 36.05f;
                float temp2 = Float.parseFloat(temp);
                String str =(String) snippet2.get("textDisplay");
                System.out.println(" erase 값 : "+erase + "  민심%값 : "   + temp2 + " 댓글 뭐냐 : "+str);
                if (Float.compare(temp2, erase)==0) {

                    data++;
                    System.out.println("data값은?????? : " + data);
                    continue;
                }

                System.out.println(data + "   : data값은");


                sum += Float.parseFloat(temp);


            }
        }

        JavaPairRDD<String, Integer> keyword = sparkContext.parallelize(comments)
                .mapToPair(word -> new Tuple2<>(word, 1))
                .reduceByKey((amount, value) -> amount + value);

        JSONArray keywords = new JSONArray();

        keyword.take(1000).forEach(tuple -> {
            JSONObject temp = new JSONObject();
            temp.put("text", tuple._1());
            temp.put("value", tuple._2());
            keywords.add(temp);
        });



        VideoMinsim VM = VideoMinsim.builder()
                ._id(id)
                .MS(sum / ((jsonArr1.size() + jsonArr2.size()) - data ))
                .keywords(keywords).build();

        ST = Status.builder()
                ._id(id)
                .status("갱신 완료")
                .time(new Date())
                .build();

        videoMSRepository.save(VM);
        statusRepository.save(ST);


        VideoToChannel VTC = VideoToChannel.builder()
                .cnt(jsonArr1.size() + jsonArr2.size() - data)
                .sum(sum)
                .keywords(keyword)
                .build();

        return VTC;
    }

    @Override
    @Transactional(isolation = Isolation.REPEATABLE_READ, rollbackFor = {RuntimeException.class, Exception.class})
    public Trend saveTrend() throws Exception {

        String apiurl = "https://www.googleapis.com/youtube/v3/videos";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&part=statistics&part=contentDetails&maxResults=5&chart=mostPopular&regionCode=KR";

        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(response.toString());

        JSONObject jsonMain = (JSONObject) obj;
        JSONArray jsonArr = (JSONArray) jsonMain.get("items");

        List<Video> result = new ArrayList<>();

        List<String> keyword = new ArrayList<>();
        List<String> tag = new ArrayList<>();

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject localized = (JSONObject) snippet.get("localized");

                keyword.addAll(wordAnalysisService.doWordAnalysis((String) localized.get("title")));
                if (snippet.get("tags") != null)
                    tag.addAll(wordAnalysisService.doWordAnalysis(snippet.get("tags").toString()));
            }
        }

        JavaPairRDD<String, Integer> keywords = sparkContext.parallelize(keyword)
                .mapToPair(word -> new Tuple2<>(word, 1))
                .reduceByKey((amount, value) -> amount + value);
        JavaPairRDD<String, Integer> tags = sparkContext.parallelize(tag)
                .mapToPair(word -> new Tuple2<>(word, 1))
                .reduceByKey((amount, value) -> amount + value);

        JSONArray kw = new JSONArray();
        keywords.take(1000).forEach(tuple -> {
            JSONObject temp = new JSONObject();
            temp.put("text", tuple._1());
            temp.put("value", tuple._2());
            kw.add(temp);
        });
        JSONArray tg = new JSONArray();
        tags.take(1000).forEach(tuple -> {
            JSONObject temp = new JSONObject();
            temp.put("text", tuple._1());
            temp.put("value", tuple._2());
            tg.add(temp);
        });

        Trend trend = Trend.builder()
                ._id("0")
                .keywords(kw)
                .tags(tg)
                .build();

        trendRepository.save(trend);

        return trend;
    }

    @Override
    public Optional<ChannelMinsim> getChannelMS(String id) {
        Optional<ChannelMinsim> result = channelMSRepository.findById(id);
        return result;
    }

    @Override
    public Optional<VideoMinsim> getVideoMS(String id) {
        Optional<VideoMinsim> result = videoMSRepository.findById(id);
        return result;
    }

    @Override
    public String checkStatusC(String id) throws Exception {
        Optional<Status> result = statusRepository.findById(id);

        if (!result.isPresent()) {
            return "갱신 가능";
        } else if (Objects.equals(result.get().getStatus(), "갱신 중")) {
            return "갱신 중";
        } else {    // 갱신 완료
            Date date1 = result.get().getTime();
            Date date2 = new Date();

            Calendar cal1 = Calendar.getInstance();
            Calendar cal2 = Calendar.getInstance();

            cal1.setTime(date1);
            cal2.setTime(date2);
            cal2.add(Calendar.HOUR, -3);


            if (cal1.compareTo(cal2) == 1) {
                //3시간 이내

                long diff = cal1.getTimeInMillis() - cal2.getTimeInMillis();
                long sec = diff / 1000;
                long min = diff / (60 * 1000);
                long hour = diff / (60 * 60 * 1000);

                String dif = hour + "시간 " + (min - hour * 60) + "분 " + (sec - min * 60) + "초";

                return "갱신 불가 : " + dif;
            } else {
                //3시간 지남
                return "갱신 가능";
            }
        }
    }

    @Override
    public String checkStatusV(String id) throws Exception {
        Optional<Status> result = statusRepository.findById(id);

        if (!result.isPresent()) {
            return "갱신 가능";
        } else if (Objects.equals(result.get().getStatus(), "갱신 중")) {

            return "갱신 중";
        } else {    // 갱신 완료
            Date date1 = result.get().getTime();
            Date date2 = new Date();

            Calendar cal1 = Calendar.getInstance();
            Calendar cal2 = Calendar.getInstance();

            cal1.setTime(date1);
            cal2.setTime(date2);
            cal2.add(Calendar.HOUR, -3);
            if (cal1.compareTo(cal2) == 1) {
                //3시간 이내
                long diff = cal1.getTimeInMillis() - cal2.getTimeInMillis();
                long sec = diff / 1000;
                long min = diff / (60 * 1000);
                long hour = diff / (60 * 60 * 1000);

                String dif = hour + "시간 " + (min - hour * 60) + "분 " + (sec - min * 60) + "초";

                return "갱신 불가 : " + dif;
            } else {
                //3시간 지남
                return "갱신 가능";
            }
        }
    }

    @Override
    public List<ChannelList> getChannelList() throws Exception {
        List<ChannelList> channelLists = channelListRepository.findAll();
        return channelLists;
    }
}
