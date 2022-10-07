package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@Builder
@Document(collection = "ChannelList")
public class ChannelList {
    @Id
    private String _id;
    private String name;
    private long subscriber;
}
