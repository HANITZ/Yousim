package com.ssafy.youtubeAnalysis.repository;

import com.ssafy.youtubeAnalysis.entity.ChannelList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChannelListRepository extends MongoRepository<ChannelList, String> {
}
