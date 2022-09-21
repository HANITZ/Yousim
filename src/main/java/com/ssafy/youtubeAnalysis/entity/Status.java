package com.ssafy.youtubeAnalysis.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Getter
@Setter
@Builder
@Document(collection = "Status")
public class Status {

    @Id
    private String _id;
    private String status;
    private Date time;
}
