package com.jinbu.jinbu.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "photos")
public class Photo {

    public Photo(@NonNull String name, Date date, int iso, double aperture, String exposureTime, int width, int height, String extension) {
        this.name = name;
        this.date = date;
        this.aperture = aperture;
        this.exposure = exposureTime;
        this.width = width;
        this.height = height;
        this.extension = extension;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    @Column(name = "name")
    private String name;

    @Column(name = "date_taken")
    private Date date;

    @Column(name = "ISO")
    private int iso;

    @Column(name = "aperture")
    private double aperture;

    @Column(name = "exposure")
    private String exposure;

    @Column(name = "width")
    private int width;

    @Column(name = "height")
    private int height;

    @Column(name = "extension")
    private String extension;

    @Value("${aws.s3.url-base}")
    private String s3BaseUrl;

    public String getFullUrl() {
        return s3BaseUrl + this.getId() + this.getExtension();
    }
}
