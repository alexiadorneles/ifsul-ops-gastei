package com.ifdevs.opsgastei.model;

import javax.persistence.*;

/**
 * Created by mhenrique on 6/30/17.
 */
@Entity
@Table(name = "gasto_fixo_mes")
@AssociationOverrides({
        @AssociationOverride(name = "primaryKey.mes",
                joinColumns = @JoinColumn(name = "mes_id")),
        @AssociationOverride(name = "primaryKey.gastoFixo",
                joinColumns = @JoinColumn(name = "gasto_fixo_id")) })
public class GastoFixoMes {

    @EmbeddedId
    private GastoFixoMesId primaryKey;

    private Double valor;

    public GastoFixoMesId getPrimaryKey() {
        return primaryKey;
    }

    public void setPrimaryKey(GastoFixoMesId primaryKey) {
        this.primaryKey = primaryKey;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }


    public GastoFixo getGastoFixo() {
        return primaryKey.getGastoFixo();
    }

    public void setGastoFixo(GastoFixo gastoFixo) {
        primaryKey.setGastoFixo(gastoFixo);
    }

    public Mes getMes() {
        return primaryKey.getMes();
    }

    public void setMes(Mes mes) {
        primaryKey.setMes(mes);
    }
}
