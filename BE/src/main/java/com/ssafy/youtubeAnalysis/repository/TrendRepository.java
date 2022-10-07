package com.ssafy.youtubeAnalysis.repository;

import com.ssafy.youtubeAnalysis.entity.Trend;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrendRepository  extends MongoRepository<Trend, String> {
}
