package com.ifdevs.opsgastei.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.Date;
import java.util.List;
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
    @Column(unique = true)
    private String nome;

    @NotNull
    private Double valor;

    //@NotNull TODO deletar, se nao necessario mais pra frente
    private String recorrenciaPattern;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date inicioData;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date fimData;

    @NotNull
    private Integer duracaoMeses;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    @OneToMany
    @JoinColumn(name = "id_gasto_fixo")
    @JsonManagedReference
    private List<GastoFixoSnapshot> gastosFixosSnapshot;

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

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<GastoFixoSnapshot> getGastosFixosSnapshot() {
        return gastosFixosSnapshot;
    }

    public void setGastosFixosSnapshot(List<GastoFixoSnapshot> gastosFixosSnapshot) {
        this.gastosFixosSnapshot = gastosFixosSnapshot;
    }
}
