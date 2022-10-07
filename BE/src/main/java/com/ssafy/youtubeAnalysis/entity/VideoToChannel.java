package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.apache.spark.api.java.JavaPairRDD;

@Data
@Getter
@Setter
@Builder
public class VideoToChannel {
    private int cnt;
    private float sum;
    JavaPairRDD<String, Integer> keywords;
}
