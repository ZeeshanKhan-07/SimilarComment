package com.web.SearchSameComments.entities; 
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="login") 
@NoArgsConstructor 
@Getter
@Setter
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int id;
    private String first_name;
    private String last_name;
    private String email;
    private String username;
    private String password;

}
