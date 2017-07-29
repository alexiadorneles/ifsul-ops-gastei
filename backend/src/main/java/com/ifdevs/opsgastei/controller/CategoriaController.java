package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Categoria;
import com.ifdevs.opsgastei.service.CategoriaService;
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
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService service;

    @GetMapping
    public Iterable<Categoria> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Categoria save(@RequestBody Categoria categoria) {
        return service.save(categoria);
    }

    @PutMapping
    public Categoria update(@RequestBody Categoria categoria) {
        return service.update(categoria);
    }

}
