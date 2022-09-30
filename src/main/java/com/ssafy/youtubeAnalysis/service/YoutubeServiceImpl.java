package com.ssafy.youtubeAnalysis.service;

import com.ssafy.youtubeAnalysis.entity.Channel;
import com.ssafy.youtubeAnalysis.entity.Comment;
import com.ssafy.youtubeAnalysis.entity.Video;
import com.ssafy.youtubeAnalysis.repository.IWordAnalysisRepository;
import com.ssafy.youtubeAnalysis.repository.YoutubeService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service("youtubeService")
public class YoutubeServiceImpl implements YoutubeService {
    public static final String KEY = "AIzaSyCwZLiaryLMYl3kQtUd6aTN6nPVAMIvwfY";

    private static IWordAnalysisRepository wordAnalysisService;


    @Override
    public List<Video> getPopularVideos() throws IOException, ParseException {

        String apiurl = "https://www.googleapis.com/youtube/v3/videos";
        apiurl += "?key=" + KEY;
//        apiurl += "&videoCategoryId=" + categoryId;
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

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject localized = (JSONObject) snippet.get("localized");
                JSONObject thumbnails = (JSONObject) snippet.get("thumbnails");
                JSONObject high = (JSONObject) thumbnails.get("high");
                JSONObject contentDetails = (JSONObject) jsonObj.get("contentDetails");
                JSONObject statistics = (JSONObject) jsonObj.get("statistics");

                Video video = Video.builder()
                        .id((String) jsonObj.get("id"))
                        .title((String) localized.get("title"))
                        .description((String) localized.get("description"))
                        .time((String) snippet.get("publishedAt"))
                        .duration((String) contentDetails.get("duration"))
                        .view(Integer.parseInt((String) statistics.get("viewCount")))
                        .like(Integer.parseInt((String) statistics.get("likeCount")))
                        .comment(Integer.parseInt((String) statistics.get("commentCount")))
                        .thumbnail((String) high.get("url"))
                        .channelTitle((String) snippet.get("channelTitle"))
                        .categoryId(Integer.parseInt((String) snippet.get("categoryId")))
                        .tag((List<String>) snippet.get("tags"))
                        .build();

                result.add(video);

            }
        }

        return result;
    }


    @Override
    public List<Channel> searchChannelId(String title) throws Exception {
        String apiurl = "https://www.googleapis.com/youtube/v3/search";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&type=channel&maxResults=3";
        apiurl += "&q=" + URLEncoder.encode(title, "UTF-8");

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

        List<Channel> result = new ArrayList<>();

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);
                JSONObject snippet = (JSONObject) jsonObj.get("snippet");

                Channel channel = channelDetailsByChannelId((String) snippet.get("channelId"));

                result.add(channel);
            }
        }

        return result;
    }

    @Override
    public List<Video> getDetails(String channelId, String nextToken) throws Exception {
        String apiurl = "https://www.googleapis.com/youtube/v3/search";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&type=video&maxResults=5&videoEmbeddable=true&order=date";
        apiurl += "&channelId=" + channelId;
        apiurl += "&pageToken=" + nextToken;


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

        List<Video> result = new ArrayList<>();
        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {

                String token = (String) jsonMain.get("nextPageToken");
                System.out.println(token);
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject id = (JSONObject) jsonObj.get("id");
                result.add(searchVideoDetailByVideoID((String) id.get("videoId")));
                result.get(i).setNextToken(token);
                searchCommentsByVideoID((String) id.get("videoId"));
            }
        }


        return result;
    }

    @Override
    public List<Comment> getComments(String videoId) throws Exception {

        String apiurl = "https://www.googleapis.com/youtube/v3/commentThreads";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&maxResults=10&order=relevance";
        apiurl += "&videoId=" + videoId;


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
        JSONArray jsonArr = (JSONArray) jsonMain.get("items");

        List<Comment> result = new ArrayList<>();

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

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


                Comment comment = Comment.builder()
                        .content((String) snippet2.get("textDisplay"))
                        .time((String) snippet2.get("publishedAt"))
                        .thumbnail((String) snippet2.get("authorProfileImageUrl"))
                        .name((String) snippet2.get("authorDisplayName"))
                        .like(((Long) snippet2.get("likeCount")).intValue())
                        .minsim(response.toString())
                        .build();

                result.add(comment);
            }
        }

        return result;
    }

    // 채널 id로 상세정보
    public static Channel channelDetailsByChannelId(String channelId) throws Exception {
        // 시작

        String apiurl = "https://www.googleapis.com/youtube/v3/channels";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet%2cstatistics%2cbrandingSettings";
        apiurl += "&id=" + channelId;

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
        JSONArray jsonArr = (JSONArray) jsonMain.get("items");

        Channel channel = null;

        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject statistics = (JSONObject) jsonObj.get("statistics");
                JSONObject brandingSettings = (JSONObject) jsonObj.get("brandingSettings");
                JSONObject image = (JSONObject) brandingSettings.get("image");
                JSONObject thumbnails = (JSONObject) snippet.get("thumbnails");
                JSONObject medium = (JSONObject) thumbnails.get("medium");

                if (image == null)
                    channel = Channel.builder()
                            .id((String) jsonObj.get("id"))
                            .name((String) snippet.get("title"))
                            .description((String) snippet.get("description"))
                            .time((String) snippet.get("publishedAt"))
                            .subscriber(Integer.parseInt((String) statistics.get("subscriberCount")))
                            .video(Integer.parseInt((String) statistics.get("videoCount")))
                            .view(Long.parseLong((String) statistics.get("viewCount")))
                            .thumbnail((String) medium.get("url"))

                            .build();
                else
                    channel = Channel.builder()
                            .id((String) jsonObj.get("id"))
                            .name((String) snippet.get("title"))
                            .description((String) snippet.get("description"))
                            .time((String) snippet.get("publishedAt"))
                            .subscriber(Integer.parseInt((String) statistics.get("subscriberCount")))
                            .video(Integer.parseInt((String) statistics.get("videoCount")))
                            .view(Long.parseLong((String) statistics.get("viewCount")))
                            .thumbnail((String) medium.get("url"))
                            .banner((String) image.get("bannerExternalUrl"))
                            .build();

            }
        }
        return channel;
    }

    // 영상 ID로 영상 세부정보 가져오기
    public static Video searchVideoDetailByVideoID(String videoID) throws IOException, ParseException {


        // api 시작

        String apiurl = "https://www.googleapis.com/youtube/v3/videos";
        apiurl += "?key=" + KEY;
        apiurl += "&part=snippet&part=statistics&part=contentDetails";
        apiurl += "&id=" + videoID;

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
        // api 끝

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(response.toString());

        JSONObject jsonMain = (JSONObject) obj;
        JSONArray jsonArr = (JSONArray) jsonMain.get("items");


        Video video = null;
        if (jsonArr.size() > 0) {
            for (int i = 0; i < jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                JSONObject localized = (JSONObject) snippet.get("localized");
                JSONObject thumbnails = (JSONObject) snippet.get("thumbnails");
                JSONObject medium = (JSONObject) thumbnails.get("medium");
                JSONObject contentDetails = (JSONObject) jsonObj.get("contentDetails");
                JSONObject statistics = (JSONObject) jsonObj.get("statistics");

                video = Video.builder()
                        .id((String) jsonObj.get("id"))
                        .title((String) localized.get("title"))
                        .description((String) localized.get("description"))
                        .time((String) snippet.get("publishedAt"))
                        .duration((String) contentDetails.get("duration"))
                        .view(Integer.parseInt((String) statistics.get("viewCount")))
                        .like(Integer.parseInt((String) statistics.get("likeCount")))
                        .comment(Integer.parseInt((String) statistics.get("commentCount")))
                        .thumbnail((String) medium.get("url"))
                        .tag((List<String>) snippet.get("tags"))
                        .build();
            }
        }
        return video;
    }

    // 영상 ID로 댓글 가져오기
    public static void searchCommentsByVideoID(String videoID) throws Exception {
        try {             // 1. 파일 객체 생성
            File file = new File("C:/Users/multicampus/Desktop/youtubedata.txt");
            // 2. 파일 존재여부 체크 및 생성
            if (!file.exists()) {
                file.createNewFile();
            }
            //
//             3. Buffer를 사용해서 File에 write할 수 있는 BufferedWriter 생성
            FileWriter fw = new FileWriter(file);
            BufferedWriter writer = new BufferedWriter(fw);
//             4. 파일에 쓰기


            String isNext = "";

            do {
                String apiurl = "https://www.googleapis.com/youtube/v3/commentThreads";
                apiurl += "?key=" + KEY;
                apiurl += "&part=snippet&maxResults=50";
                apiurl += "&videoId=" + videoID;
//            apiurl += "&pageToken=" + isNext;

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
//            isNext = (String) jsonMain.get("nextPageToken");
                System.out.println(isNext);
                JSONArray jsonArr = (JSONArray) jsonMain.get("items");


                Map<String, Integer> rMap = null;
                if (jsonArr.size() > 0) {
                    for (int i = 0; i < jsonArr.size(); i++) {


                        JSONObject jsonObj = (JSONObject) jsonArr.get(i);

                        JSONObject snippet = (JSONObject) jsonObj.get("snippet");
                        JSONObject topLevelComment = (JSONObject) snippet.get("topLevelComment");
                        JSONObject snippet2 = (JSONObject) topLevelComment.get("snippet");
//                    System.out.println(snippet);
//                        writer.write((String) snippet2.get("testDisplay"));

//                    rMap=wordAnalysisService.doWordAnalysis((String)snippet2.get("testDisplay"));
//                    System.out.println(rMap);
//                    System.out.println("댓글 내용 : " + snippet2.get("textDisplay"));
//                    System.out.println("작성 시간 : " + snippet2.get("publishedAt"));
//                    System.out.println("좋아요 : " + snippet2.get("likeCount"));

                    }
                }

            } while (isNext != "" && isNext != null);
            // 시작
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
