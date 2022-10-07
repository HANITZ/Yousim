package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class Video {
    String id;
    String title;
    String description;
    String time;
    String duration;
    String nextToken;

    int view;
    int like;
    int comment;

    String thumbnail;
    String channelTitle;
    int categoryId;
    List<String> tag;
}
