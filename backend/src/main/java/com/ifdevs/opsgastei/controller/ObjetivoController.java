package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Objetivo;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.ObjetivoService;
import com.ifdevs.opsgastei.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @Autowired
    UsuarioService usuarioService;

    @GetMapping
    public Iterable<Objetivo> findAll() {
        return service.findAll();
    }

    @DeleteMapping(value = "/{id}")
    public void remove(@PathVariable Long id) {
        Objetivo objetivo = service.loadById(id);
        service.remove(objetivo);
    }

    @PostMapping
    public Objetivo save(@RequestBody Objetivo objetivo, @AuthenticationPrincipal User user) {
        Usuario usuario = usuarioService.findUsuarioByEmail(user.getUsername());
        objetivo.setUsuario(usuario);
        return service.save(objetivo);
    }

    @PutMapping
    public Objetivo update(@RequestBody Objetivo objetivo) {
        return service.update(objetivo);
    }

}
