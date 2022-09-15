package com.ssafy.youtubeAnalysis.controller;

import com.ssafy.youtubeAnalysis.entity.Minsim;
import com.ssafy.youtubeAnalysis.repository.MinsimRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Api(value = "테스트 API", tags = {"Test"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/test")
public class TestController {

    private final MinsimRepository minsimRepository;

    @GetMapping("/minsim")
    public ResponseEntity findById(@RequestParam @ApiParam(value = "ID", required = true) String id){
        Optional<Minsim> optional  = minsimRepository.findById(id);

        if (optional.isPresent())  return ResponseEntity.status(200).body(optional);
        else return  ResponseEntity.status(204).body("갱신 중...");
    }
}
