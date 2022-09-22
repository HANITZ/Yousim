package com.ssafy.youtubeAnalysis.service;

import com.ssafy.youtubeAnalysis.entity.ChannelMinsim;
import com.ssafy.youtubeAnalysis.entity.Status;
import com.ssafy.youtubeAnalysis.entity.VideoMinsim;
import com.ssafy.youtubeAnalysis.entity.repository.ChannelMSRepository;
import com.ssafy.youtubeAnalysis.entity.repository.StatusRepository;
import com.ssafy.youtubeAnalysis.entity.repository.VideoMSRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Calendar;
import java.util.Date;
import java.util.Objects;
import java.util.Optional;

@Service("yousimService")
public class YousimServiceImpl implements YousimService {
    @Autowired
    ChannelMSRepository channelMSRepository;

    @Autowired
    VideoMSRepository videoMSRepository;

    @Autowired
    StatusRepository statusRepository;

    public static final String KEY = "AIzaSyCwZLiaryLMYl3kQtUd6aTN6nPVAMIvwfY";

    @Override
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


        String result;
        float sum = 0;
        int cnt = 0;
        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject VideoId = (JSONObject) jsonObj.get("id");
                result = saveVideoMS((String) VideoId.get("videoId"));
                String temp[] = result.split("#");
                sum += Float.parseFloat(temp[0]);
                cnt += Integer.parseInt(temp[1]);
            }
        }


        JSONObject temp = new JSONObject();

        temp.put("침착맨", 8);
        temp.put("주호민", 6);


        ChannelMinsim CM = ChannelMinsim.builder()
                ._id(id)
                .MS(sum / cnt)
                .keywords(temp).build();

        ST = Status.builder()
                ._id(id)
                .status("갱신 완료")
                .time(new Date())
                .build();

        channelMSRepository.save(CM);
        statusRepository.save(ST);
    }

    @Override
    public String saveVideoMS(String id) throws Exception {
        Optional<Status> check = statusRepository.findById(id);

        if (check.isPresent() && Objects.equals(check.get().getStatus(), "갱신 중")) {
            return "";
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

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
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

        if (jsonArr1.size() > 0) {
            for (int i = 0; i < jsonArr1.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr1.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject topLevelComment = (JSONObject) snippet.get("topLevelComment");
                JSONObject snippet2 = (JSONObject) topLevelComment.get("snippet");


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
                System.out.println(temp + "||" + snippet2.get("textDisplay"));
                sum += Float.parseFloat(temp);
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
                System.out.println(temp + "||" + snippet2.get("textDisplay"));
                sum += Float.parseFloat(temp);


            }
        }

        JSONObject temp = new JSONObject();

        temp.put("침착맨", 8);
        temp.put("주호민", 6);

        VideoMinsim VM = VideoMinsim.builder()
                ._id(id)
                .MS(sum / (jsonArr1.size() + jsonArr2.size()))
                .keywords(temp).build();

        ST = Status.builder()
                ._id(id)
                .status("갱신 완료")
                .time(new Date())
                .build();

        videoMSRepository.save(VM);
        statusRepository.save(ST);

        return sum + "#" + (jsonArr1.size() + jsonArr1.size());
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
        System.out.println(id);
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
}