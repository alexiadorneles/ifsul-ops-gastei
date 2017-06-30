package com.ifdevs.opsgastei.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

/**
 * Created by mhenrique on 6/30/17.
 */
@Entity
public class Mes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date data;

    @NotNull
    private Double salario;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @ManyToMany
    @JoinTable(name="objetivo_mes",
            joinColumns={@JoinColumn(name="id_mes")},
            inverseJoinColumns={@JoinColumn(name="id_objetivo")})
    private Set<Objetivo> objetivos;

    @OneToMany(mappedBy = "primaryKey.mes",
            cascade = CascadeType.ALL)
    private Set<GastoFixoMes> gastoFixoMes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Set<Objetivo> getObjetivos() {
        return objetivos;
    }

    public void setObjetivos(Set<Objetivo> objetivos) {
        this.objetivos = objetivos;
    }

    public Set<GastoFixoMes> getGastoFixoMes() {
        return gastoFixoMes;
    }

    public void setGastoFixoMes(Set<GastoFixoMes> gastoFixoMes) {
        this.gastoFixoMes = gastoFixoMes;
    }
}
