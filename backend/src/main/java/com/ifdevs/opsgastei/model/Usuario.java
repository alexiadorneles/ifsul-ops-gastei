package com.ifdevs.opsgastei.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Created by mhenrique on 6/23/17.
 */
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(nullable = false, unique = false)
    private String nome;

    @NotNull
    @Column(nullable = false, unique = true)
    private String email;

    @NotNull
    @Column(nullable = false)
    private String senha;

    @NotNull
    @Column(nullable = false)
    @Min(0)
    private Double salario;

    public Usuario(Long id, String nome, String email, String senha, Double salario) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.salario = salario;
    }

    public Usuario() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public void criptografarSenha() {
        this.senha = new BCryptPasswordEncoder().encode(this.senha);
    }
}
