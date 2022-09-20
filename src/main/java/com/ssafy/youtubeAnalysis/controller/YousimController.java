package com.ssafy.youtubeAnalysis.controller;

import com.ssafy.youtubeAnalysis.entity.ChannelMinsim;
import com.ssafy.youtubeAnalysis.entity.VideoMinsim;
import com.ssafy.youtubeAnalysis.service.YousimService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Api(value = "유심 API", tags = {"Yousim"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/Yousim")
public class YousimController {

    @Autowired
    YousimService yousimService;

    @GetMapping("/channel-status")
    @ApiResponses({
            @ApiResponse(code = 200, message = "갱신 가능"),
            @ApiResponse(code = 202, message = "갱신 불가"),

    })
    public ResponseEntity checkStatusChannel(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {
        String result = yousimService.checkStatusC(id);

        if (result.equals("갱신 가능")) return ResponseEntity.status(200).body(result);
        else {
            return ResponseEntity.status(202).body(result);
        }
    }

    @GetMapping("/video-status")
    @ApiResponses({
            @ApiResponse(code = 200, message = "갱신 가능"),
            @ApiResponse(code = 202, message = "갱신 불가"),

    })
    public ResponseEntity checkStatusVideo(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {
        String result = yousimService.checkStatusV(id);

        if (result.equals("갱신 가능")) return ResponseEntity.status(200).body(result);
        else {
            return ResponseEntity.status(202).body(result);
        }
    }


    @GetMapping("/channel")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 202, message = "갱신중"),

    })
    public ResponseEntity channelMS(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {
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

    @GetMapping("/video")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 202, message = "갱신중"),

    })
    public ResponseEntity VideoMS(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {
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

    @PostMapping("/channel-refresh")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 202, message = "갱신중"),

    })
    public ResponseEntity refreshCMS(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {

        String status = yousimService.checkStatusC(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        yousimService.saveChannelMS(id);
        Optional<ChannelMinsim> optional = yousimService.getChannelMS(id);
        return ResponseEntity.status(200).body(optional);
    }

    @PostMapping("/video-refresh")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 202, message = "갱신중"),

    })
    public ResponseEntity refreshVMS(@RequestParam @ApiParam(value = "ID", required = true) String id) throws Exception {

        String status = yousimService.checkStatusV(id);
        if (status.equals("갱신 중")) return ResponseEntity.status(202).body("갱신 중");

        yousimService.saveVideoMS(id);
        Optional<VideoMinsim> optional = yousimService.getVideoMS(id);
        return ResponseEntity.status(200).body(optional);
    }


}
