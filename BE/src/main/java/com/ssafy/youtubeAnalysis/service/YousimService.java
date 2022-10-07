package com.ssafy.youtubeAnalysis.service;

import com.ssafy.youtubeAnalysis.entity.*;

import java.util.List;
import java.util.Optional;

public interface YousimService {

    void saveChannelMS(String id) throws Exception;

    VideoToChannel saveVideoMS(String id) throws Exception;

    Trend saveTrend() throws Exception;

    Optional<ChannelMinsim> getChannelMS(String id);

    Optional<VideoMinsim> getVideoMS(String id);

    String checkStatusC(String id) throws Exception;

    String checkStatusV(String id) throws Exception;



    List<ChannelList> getChannelList() throws Exception;

}