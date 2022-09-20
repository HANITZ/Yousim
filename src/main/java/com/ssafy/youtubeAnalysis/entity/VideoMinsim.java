package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@Builder
@Document(collection = "Video")
public class VideoMinsim {
    @Id
    private String _id;
    private float MS;
    private JSONObject keywords;
}
