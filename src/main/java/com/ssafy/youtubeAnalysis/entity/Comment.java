package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Comment {
    String content;
    String time;
    String thumbnail;
    String name;
    int like;
    String minsim;
}
