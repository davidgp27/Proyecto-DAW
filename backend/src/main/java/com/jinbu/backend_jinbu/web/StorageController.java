package com.jinbu.backend_jinbu.web;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jinbu.backend_jinbu.service.storage.StorageService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;


@AllArgsConstructor
@RestController
@RequestMapping("/files")
public class StorageController {

    StorageService storageService;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> upload(@RequestParam MultipartFile file) throws IOException {
        String filename = storageService.store(file);
        // Respuesta del servidor. Devuelve nombre del archivo y url de descarga
        Map<String, String> responseBody = Map.of(
            "filename", filename,
            "downloadUrl", "/files/download/" + URLEncoder.encode(filename, StandardCharsets.UTF_8)
        );

        return new ResponseEntity<>(responseBody, HttpStatus.CREATED);
    }
    
    @GetMapping("/download({filename:.+}")
    public ResponseEntity<Resource> download(@PathVariable String fileName, HttpServletRequest request) throws IOException {
        Resource resource = storageService.loadAsResource(fileName);
        String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        if (contentType == null) contentType = "application/octet-stream";
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    // Streaming download
    @GetMapping("/stream/{filename:.+}")
    public ResponseEntity<StreamingResponseBody> stream(@PathVariable String filename, HttpServletRequest request) throws IOException {
        Resource resource = storageService.loadAsResource(filename);
        InputStream in = resource.getInputStream();
        StreamingResponseBody body = outputStream -> {
            byte[] buffer = new byte[4096];
            int n;
            try (InputStream is = in; OutputStream os = outputStream) {
                while ((n = is.read(buffer)) != -1) {
                    os.write(buffer, 0, n);
                }
            }
        };
        String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        if (contentType == null) contentType = "application/octet-stream";
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(body);
    }
}
