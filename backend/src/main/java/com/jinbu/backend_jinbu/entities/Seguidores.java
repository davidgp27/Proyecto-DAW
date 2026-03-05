package com.jinbu.backend_jinbu.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "seguidores")
public class Seguidores {

    @Id
    @Column(name = "usuario")
    private int userIdUsuario;

    @NonNull
    @Column(name = "seguidor")
    private int userIdSeguidor;

}
