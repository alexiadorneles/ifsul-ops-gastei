package com.ifdevs.opsgastei.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * Created by mhenrique on 6/30/17.
 */
public class Objetivo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String nome;

    @NotNull
    private Boolean status;

    @NotNull
    private Double valor;
}
