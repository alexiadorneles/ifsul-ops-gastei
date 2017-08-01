package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Salario;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.SalarioService;
import com.ifdevs.opsgastei.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mhenrique on 7/29/17.
 */
@RestController
@RequestMapping("/salarios")
public class SalarioController {

    @Autowired
    private SalarioService service;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public Iterable<Salario> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Salario save(@RequestBody Salario salario, @AuthenticationPrincipal User user) {
        Usuario usuario = usuarioService.findUsuarioByEmail(user.getUsername());
        salario.setUsuario(usuario);
        return service.save(salario);
    }

    @PutMapping
    public Salario update(@RequestBody Salario salario) {
        return service.update(salario);
    }

}
