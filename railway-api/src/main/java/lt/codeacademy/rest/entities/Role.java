package lt.codeacademy.rest.entities;


import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name="Roles")
public class Role {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="role_id")
    private Long id;

    @NotNull
    @Column(name = "role")
    private String role;
}
