package com.ifdevs.opsgastei.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

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

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date data;

    private int periodo;

    @OneToMany(mappedBy = "primaryKey.gastoFixo",
            cascade = CascadeType.ALL)
    private Set<GastoFixoMes> gastoFixoMes;

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

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public int getPeriodo() {
        return periodo;
    }

    public void setPeriodo(int periodo) {
        this.periodo = periodo;
    }

    public Set<GastoFixoMes> getGastoFixoMes() {
        return gastoFixoMes;
    }

    public void setGastoFixoMes(Set<GastoFixoMes> gastoFixoMes) {
        this.gastoFixoMes = gastoFixoMes;
    }
}
