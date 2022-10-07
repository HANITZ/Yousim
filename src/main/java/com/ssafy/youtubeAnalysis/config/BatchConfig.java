package com.ssafy.youtubeAnalysis.config;

import java.util.List;

import com.ssafy.youtubeAnalysis.entity.ChannelList;
import com.ssafy.youtubeAnalysis.repository.YoutubeService;
import com.ssafy.youtubeAnalysis.service.YousimService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
@EnableBatchProcessing
public class BatchConfig {

    @Autowired
    public JobBuilderFactory jobBuilderFactory;
    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Autowired
    YoutubeService youtubeService;

    @Autowired
    YousimService yousimService;

    @Bean
    public Job job() {

        Job job = jobBuilderFactory.get("job")
                .start(step())
                .build();

        return job;
    }

    @Bean
    public Step step() {
        return stepBuilderFactory.get("step")
                .tasklet((contribution, chunkContext) -> {
                    log.info("Start!");


//                    log.info("Processing...");
//
//                    List<ChannelList> channelLists = yousimService.getChannelList();
//
//                    for (ChannelList channelList:channelLists) {
//                        yousimService.saveChannelMS(channelList.get_id());
//                    }


                    log.info("Finish!");
                    return RepeatStatus.FINISHED;
                })
                .build();
    }
}