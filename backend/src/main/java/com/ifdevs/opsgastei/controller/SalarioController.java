package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.Salario;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.SalarioService;
import com.ifdevs.opsgastei.service.UsuarioService;
import java.util.List;
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
        salario.setUsuario(this.buscarUsuario(user.getUsername()));
        return service.save(salario);
    }

    @PutMapping
    public Salario update(@RequestBody Salario salario) {
        return service.update(salario);
    }

    @GetMapping(value = "/usuario")
    public List<Salario> findByUsuario(@AuthenticationPrincipal User user) {
        return service.findByUsuario(this.buscarUsuario(user.getUsername()));
    }

    private Usuario buscarUsuario(String username) {
        return usuarioService.findUsuarioByEmail(username);
    }

}
