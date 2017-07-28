package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Mes;
import com.ifdevs.opsgastei.service.MesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alexia.pereira on 07/27/17
 */
@RestController
@RequestMapping("/meses")
public class MesController {

    @Autowired
    MesService service;

    @GetMapping
    public Iterable<Mes> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Mes save(@RequestBody Mes mes) {
        return service.save(mes);
    }

    @PutMapping
    public Mes update(@RequestBody Mes mes) {
        return service.update(mes);
    }

}
