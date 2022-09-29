package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@Builder
@Document(collection = "Channel")
public class ChannelMinsim {
    @Id
    private String _id;
    private float MS;
    private JSONArray keywords;
}
