package com.jinbu.jinbu.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class LocalImageStorage implements ImageService {
    private final Path folder = Paths.get("local-images");

    public LocalImageStorage() throws IOException {
        if (Files.notExists(folder)) {
            Files.createDirectories(folder);
        }
    }

    public void store(MultipartFile file, String name) throws IOException {
        Path destination = folder.resolve(name);
        try (InputStream stream = file.getInputStream()) {
            Files.copy(stream, destination, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    public void delete(String name) throws IOException {
        Path destination = folder.resolve(name);
        
        Files.deleteIfExists(destination);
    }
}
