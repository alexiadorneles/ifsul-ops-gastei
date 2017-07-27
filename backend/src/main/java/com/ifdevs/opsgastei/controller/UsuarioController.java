package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alexia.pereira on 07/25/17
 */
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    UsuarioService service;

    @GetMapping
    public Iterable<Usuario> findAll() {
        return service.findAll();
    }

    @PostMapping(value = "/salvar")
    public Usuario save(@RequestBody Usuario usuario) {
        return service.verificarUsuario(usuario);
    }

    @PutMapping
    public Usuario update(@RequestBody Usuario usuario) {
        return service.update(usuario);
    }

}
