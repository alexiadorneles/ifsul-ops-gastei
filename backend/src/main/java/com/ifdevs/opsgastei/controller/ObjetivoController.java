package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Objetivo;
import com.ifdevs.opsgastei.service.ObjetivoService;
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
@RequestMapping("/objetivos")
public class ObjetivoController {

    @Autowired
    ObjetivoService service;

    @GetMapping
    public Iterable<Objetivo> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Objetivo save(@RequestBody Objetivo objetivo) {
        return service.save(objetivo);
    }

    @PutMapping
    public Objetivo update(@RequestBody Objetivo objetivo) {
        return service.update(objetivo);
    }

}
