package com.ssafy.youtubeAnalysis.repository;

import com.ssafy.youtubeAnalysis.entity.ChannelMinsim;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChannelMSRepository extends MongoRepository<ChannelMinsim, String> {
}
