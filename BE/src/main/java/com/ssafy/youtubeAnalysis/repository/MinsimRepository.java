package com.ssafy.youtubeAnalysis.repository;

import com.ssafy.youtubeAnalysis.entity.Minsim;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MinsimRepository extends MongoRepository<Minsim, String> {
}
