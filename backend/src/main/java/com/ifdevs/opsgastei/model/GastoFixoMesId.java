package com.ifdevs.opsgastei.model;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;

/**
 * Created by mhenrique on 6/30/17.
 */
@Embeddable
public class GastoFixoMesId implements Serializable {

    @ManyToOne(cascade = CascadeType.ALL)
    private GastoFixo gastoFixo;

    @ManyToOne(cascade = CascadeType.ALL)
    private Mes mes;

    public GastoFixo getGastoFixo() {
        return gastoFixo;
    }

    public void setGastoFixo(GastoFixo gastoFixo) {
        this.gastoFixo = gastoFixo;
    }

    public Mes getMes() {
        return mes;
    }

    public void setMes(Mes mes) {
        this.mes = mes;
    }
}
