package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Salario;
import com.ifdevs.opsgastei.service.SalarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mhenrique on 7/29/17.
 */
@RestController
@RequestMapping("/salarios")
public class SalarioController {

    @Autowired
    private SalarioService service;

    @GetMapping
    public Iterable<Salario> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Salario save(@RequestBody Salario salario) {
        return service.save(salario);
    }

    @PutMapping
    public Salario update(@RequestBody Salario salario) {
        return service.update(salario);
    }

}
