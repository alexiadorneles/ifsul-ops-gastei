package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.GastoFixoService;
import com.ifdevs.opsgastei.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 *
 * @author alexia.pereira on 07/28/17
 */
@RestController
@RequestMapping("/gastos-fixos")
public class GastoFixoController {

    @Autowired
    GastoFixoService service;

    @Autowired
    UsuarioService usuarioService;

    @GetMapping
    public Iterable<GastoFixo> findAll() {
        return service.findAll();
    }

    @PostMapping
    public GastoFixo save(@RequestBody GastoFixo gastoFixo, Principal principal) {
        Usuario logado = usuarioService.findUsuarioByEmail(principal.getName());
        gastoFixo.setUsuario(logado);
        return service.save(gastoFixo);
    }

    @PutMapping
    public GastoFixo update(@RequestBody GastoFixo gastoFixo) {
        return service.update(gastoFixo);
    }

}
