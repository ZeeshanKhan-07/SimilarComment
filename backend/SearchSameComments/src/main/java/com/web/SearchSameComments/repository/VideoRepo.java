package com.web.SearchSameComments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.SearchSameComments.entities.Video;

public interface VideoRepo extends JpaRepository<Video, Integer>{
    
}
