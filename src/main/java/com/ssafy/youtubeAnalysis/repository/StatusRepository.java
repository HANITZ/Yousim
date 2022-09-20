package com.ssafy.youtubeAnalysis.repository;

import com.ssafy.youtubeAnalysis.entity.Status;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends MongoRepository<Status, String> {
}