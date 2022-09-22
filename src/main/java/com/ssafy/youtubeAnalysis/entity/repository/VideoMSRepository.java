package com.ssafy.youtubeAnalysis.entity.repository;

import com.ssafy.youtubeAnalysis.entity.VideoMinsim;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoMSRepository extends MongoRepository<VideoMinsim, String> {
}
