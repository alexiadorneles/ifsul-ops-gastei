package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.service.GastoFixoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alexia.pereira on 07/28/17
 */
@RestController
@RequestMapping("/gastos-fixos")
public class GastoFixoController {

    @Autowired
    GastoFixoService service;

    @GetMapping
    public Iterable<GastoFixo> findAll() {
        return service.findAll();
    }

    @PostMapping
    public GastoFixo save(@RequestBody GastoFixo gastoFixo) {
        return service.save(gastoFixo);
    }

    @PutMapping
    public GastoFixo update(@RequestBody GastoFixo gastoFixo) {
        return service.update(gastoFixo);
    }

}
