package com.ssafy.youtubeAnalysis.controller;

import com.ssafy.youtubeAnalysis.entity.ChannelMinsim;
import com.ssafy.youtubeAnalysis.entity.Trend;
import com.ssafy.youtubeAnalysis.entity.VideoMinsim;
import com.ssafy.youtubeAnalysis.service.WordAnalysisService;
import com.ssafy.youtubeAnalysis.service.YousimService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Tag(name = "Yousim", description = "YousimAPI")
@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/Yousim")
public class YousimController {

    @Autowired
    YousimService yousimService;

    @Autowired
    WordAnalysisService wordAnalysisService;

    @Operation(summary = "채널 갱신 상태 확인", description = "갱신 가능 여부 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "갱신 가능"),
            @ApiResponse(responseCode = "202", description = "갱신 중 or 갱신 불가 + 시간")
    })
    @GetMapping("/channel-status")
    public ResponseEntity checkStatusChannel(String id) throws Exception {
        String result = yousimService.checkStatusC(id);

        if (result.equals("갱신 가능")) return ResponseEntity.status(200).body(result);
        else {
            return ResponseEntity.status(202).body(result);
        }
    }

    @Operation(summary = "영상 갱신 상태 확인", description = "갱신 가능 여부 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "갱신 가능"),
            @ApiResponse(responseCode = "202", description = "갱신 중 or 갱신 불가 + 시간")
    })
    @GetMapping("/video-status")
    public ResponseEntity checkStatusVideo(String id) throws Exception {

        String result = yousimService.checkStatusV(id);

        if (result.equals("갱신 가능")) return ResponseEntity.status(200).body(result);
        else {
            return ResponseEntity.status(202).body(result);
        }
    }

    @Operation(summary = "채널 민심 확인", description = "채널 민심 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ChannelMinsim.class))),
            @ApiResponse(responseCode = "202", description = "갱신 중")
    })
    @GetMapping("/channel")
    public ResponseEntity channelMS(String id) throws Exception {
        Optional<ChannelMinsim> optional = yousimService.getChannelMS(id);

        String status = yousimService.checkStatusC(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        if (optional.isPresent()) return ResponseEntity.status(200).body(optional);
        else {
            yousimService.saveChannelMS(id);
            optional = yousimService.getChannelMS(id);
            return ResponseEntity.status(200).body(optional);
        }
    }

    @Operation(summary = "영상 민심 확인", description = "영상 민심 확인하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = VideoMinsim.class))),
            @ApiResponse(responseCode = "202", description = "갱신 중")
    })
    @GetMapping("/video")
    public ResponseEntity VideoMS(String id) throws Exception {
        Optional<VideoMinsim> optional = yousimService.getVideoMS(id);

        String status = yousimService.checkStatusC(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        if (optional.isPresent()) return ResponseEntity.status(200).body(optional);
        else {
            yousimService.saveVideoMS(id);
            optional = yousimService.getVideoMS(id);
            return ResponseEntity.status(200).body(optional);
        }
    }

    @Operation(summary = "채널 민심 갱신", description = "채널 민심 갱신하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ChannelMinsim.class))),
            @ApiResponse(responseCode = "202", description = "갱신 중")
    })
    @PostMapping("/channel-refresh")
    public ResponseEntity refreshCMS(String id) throws Exception {

        String status = yousimService.checkStatusC(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        yousimService.saveChannelMS(id);
        Optional<ChannelMinsim> optional = yousimService.getChannelMS(id);
        return ResponseEntity.status(200).body(optional);
    }

    @Operation(summary = "영상 민심 갱신", description = "영상 민심 갱신하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = VideoMinsim.class))),
            @ApiResponse(responseCode = "202", description = "갱신 중")
    })
    @PostMapping("/video-refresh")
    public ResponseEntity refreshVMS(String id) throws Exception {

        String status = yousimService.checkStatusV(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        yousimService.saveVideoMS(id);
        Optional<VideoMinsim> optional = yousimService.getVideoMS(id);
        return ResponseEntity.status(200).body(optional);
    }

    @Operation(summary = "트렌드 확인", description = "트렌드 확인 & 갱신하는 API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = Trend.class))),
//            @ApiResponse(responseCode = "202", description = "갱신 중")
    })
    @PostMapping("/trend")
    public ResponseEntity getTrend() throws Exception {


        Trend trend = yousimService.saveTrend();

        return ResponseEntity.status(200).body(trend);
    }

//    @GetMapping("/test")
//    public ResponseEntity test() throws Exception {
//
//        List<String> rList = wordAnalysisService.doWordNouns("가나다다라 안녕 뭐해 김치찌개 개꿀잼");
//        String str = "가 나 다 라 라";
//        rList = Arrays.asList(wordAnalysisService.doWordNouns("가나다다라 안녕 뭐해 김치찌개 개꿀잼").toString());
//
//        for (String temp:rList) {
//            System.out.println(temp);
//        }
//
//
//
//        return ResponseEntity.status(200).body("");
//    }
}