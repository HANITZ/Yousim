package com.ssafy.youtubeAnalysis.controller;

import com.ssafy.youtubeAnalysis.entity.Channel;
import com.ssafy.youtubeAnalysis.entity.Comment;
import com.ssafy.youtubeAnalysis.entity.Video;
import com.ssafy.youtubeAnalysis.repository.IWordAnalysisRepository;
import com.ssafy.youtubeAnalysis.repository.YoutubeService;
import org.apache.log4j.Logger;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import javax.annotation.Resource;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(value = "유튜브 API", tags = {"Youtube"})
@RestController
@RequestMapping("/api/v1/youtube")
public class YoutubeController {

    @Autowired
    YoutubeService youtubeService;

    @PostMapping("/popular")
    @ApiOperation(value = "인기 영상 조회", notes = "<strong>인기 영상</strong>을 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//        @ApiResponse(code = 404, message = "사용자 없음"),
//        @ApiResponse(code = 404, message = "잘못된 요청"),
//        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Video>> popularVideos(
            @RequestBody @ApiParam(value = "영상 카테고리", required = true) int categoryId) throws IOException, ParseException {

        List<Video> result = youtubeService.getPopularVideos(categoryId);

        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/search")
    @ApiOperation(value = "채널 ID 조회", notes = "<strong>채널 ID</strong>를 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//        @ApiResponse(code = 404, message = "사용자 없음"),
//        @ApiResponse(code = 404, message = "잘못된 요청"),
//        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Channel>> searchChannelId(
            @RequestParam @ApiParam(value = "채널명", required = true) String title) throws Exception {

        List<Channel> result = youtubeService.searchChannelId(title);

        return ResponseEntity.status(200).body(result);
    }

    @GetMapping("/comment")
    @ApiOperation(value = "영상 댓글 조회", notes = "<strong>좋아요 많은 댓글</strong>를 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//        @ApiResponse(code = 404, message = "사용자 없음"),
//        @ApiResponse(code = 404, message = "잘못된 요청"),
//        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Comment>> comments(
            @RequestParam @ApiParam(value = "영상 ID", required = true) String videoId) throws Exception {

        List<Comment> result = youtubeService.getComments(videoId);

        return ResponseEntity.status(200).body(result);
    }

    @PostMapping("/detail")
    @ApiOperation(value = "채널 상세 조회", notes = "<strong>채널 상세 정보</strong>를 조회 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//        @ApiResponse(code = 404, message = "사용자 없음"),
//        @ApiResponse(code = 404, message = "잘못된 요청"),
//        @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Video>> details(
            @RequestBody @ApiParam(value = "채널 ID", required = true) String channelId) throws Exception {

        List<Video> result = youtubeService.getDetails(channelId);

        return ResponseEntity.status(200).body(result);
    }

    private Logger log = Logger.getLogger(this.getClass());

    @Autowired
    private IWordAnalysisRepository wordAnalysisService;

    @GetMapping(value = "/word/analysis")
    @ResponseBody
    public Map<String, Integer> analysis() throws Exception {

        log.info(this.getClass().getName() + ".inputForm !");

//        List<String> lines = Files.readAllLines(Paths.get("C:/Users/multicampus/Desktop/youtubedata.txt"));
//
//        System.out.println(lines);
        String line="";
        Map<String, Integer> rMap = null;


        File file = new File("C:/Users/multicampus/Desktop/youtubedata.txt");
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            while ((line = br.readLine()) != null) {
                rMap = wordAnalysisService.doWordAnalysis(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

//        Map<String, Integer> rMap = wordAnalysisService.doWordAnalysis(text);
//
        if(rMap == null) {
            rMap = new HashMap<String, Integer>();
        }


        return rMap;
    }
}
