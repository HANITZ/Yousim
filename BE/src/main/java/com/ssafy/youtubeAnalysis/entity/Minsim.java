package com.ssafy.youtubeAnalysis.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="test")
public class Minsim {

    @Id
    private String _id;
    private String name;
    private String test;

}
