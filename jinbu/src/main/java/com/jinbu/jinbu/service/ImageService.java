package com.jinbu.jinbu.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {

    void store(MultipartFile file, String name) throws IOException;
}
