package com.ifdevs.opsgastei.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by mhenrique on 7/29/17.
 */
@Entity
public class GastoFixoSnapshot {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private Double valor;

    @NotNull
    private Date data;

    @ManyToOne
    @JoinColumn(name = "id_gasto_fixo")
    private GastoFixo gastoFixo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public GastoFixo getGastoFixo() {
        return gastoFixo;
    }

    public void setGastoFixo(GastoFixo gastoFixo) {
        this.gastoFixo = gastoFixo;
    }
}
