package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Channel {
    String id;
    String name;
    String description;
    String time;

    int subscriber;
    Long view;
    int video;

    String thumbnail;
    String banner;
}
