package com.ifdevs.opsgastei.model;

import java.util.Date;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by mhenrique on 6/30/17.
 */
@Entity
public class GastoFixo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String nome;

    @NotNull
    private Double valor;

    @NotNull
    private String recorrenciaPattern;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date inicioData;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date fimData;

    @NotNull
    private Integer duracaoMeses;

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

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getRecorrenciaPattern() {
        return recorrenciaPattern;
    }

    public void setRecorrenciaPattern(String recorrenciaPattern) {
        this.recorrenciaPattern = recorrenciaPattern;
    }

    public Date getInicioData() {
        return inicioData;
    }

    public void setInicioData(Date inicioData) {
        this.inicioData = inicioData;
    }

    public Date getFimData() {
        return fimData;
    }

    public void setFimData(Date fimData) {
        this.fimData = fimData;
    }

    public Integer getDuracaoMeses() {
        return duracaoMeses;
    }

    public void setDuracaoMeses(Integer duracaoMeses) {
        this.duracaoMeses = duracaoMeses;
    }
}
