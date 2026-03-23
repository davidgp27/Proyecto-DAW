package com.jinbu.jinbu.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "photos")
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NonNull
    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "ISO")
    private String iso;

    @Column(name = "aperture")
    private String aperture;

    @Column(name = "shutter_speed")
    private String shutterSpeed;

    @Column(name = "width")
    private float width;

    @Column(name = "height")
    private float height;
}
