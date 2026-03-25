package com.jinbu.jinbu.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "photos")
public class Photo {

    public Photo(@NonNull String name, Date date, int iso, double aperture, String exposureTime, int width, int height) {
        this.name = name;
        this.date = date;
        this.aperture = aperture;
        this.exposure = exposureTime;
        this.width = width;
        this.height = height;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NonNull
    @Column(name = "name", nullable = false)
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
}
