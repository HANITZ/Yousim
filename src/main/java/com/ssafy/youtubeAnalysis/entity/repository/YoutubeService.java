package com.ssafy.youtubeAnalysis.entity.repository;

import java.io.IOException;
import java.util.List;

import com.ssafy.youtubeAnalysis.entity.Channel;
import com.ssafy.youtubeAnalysis.entity.Comment;
import com.ssafy.youtubeAnalysis.entity.Video;
import org.json.simple.parser.ParseException;

public interface YoutubeService {
    List<Video> getPopularVideos(int categoryId) throws IOException, ParseException;

    List<Channel> searchChannelId(String title) throws Exception;

    List<Video> getDetails(String channelId) throws Exception;

    List<Comment> getComments(String videoId) throws Exception;
}
