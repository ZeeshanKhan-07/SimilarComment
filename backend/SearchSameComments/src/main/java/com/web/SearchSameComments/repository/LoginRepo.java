package com.web.SearchSameComments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.SearchSameComments.entities.Login;

public interface LoginRepo  extends JpaRepository<Login, Integer>{
    
}
