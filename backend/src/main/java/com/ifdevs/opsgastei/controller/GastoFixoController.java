package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.service.GastoFixoService;
import com.ifdevs.opsgastei.service.UsuarioService;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    /*
    * Para encerrar um gasto fixo deve-se:
    * - enviar gasto fixo;
    * - a data de encerramento sera a data final do gasto fixo, que causa
    *   na data final se tornar a data anterior ao mes de encerramento.
    *
    */
    @PutMapping
    public GastoFixo update(@RequestBody GastoFixo gastoFixo, Principal principal) {
        Usuario logado = usuarioService.findUsuarioByEmail(principal.getName());
        gastoFixo.setUsuario(logado);

        return service.encerrar(gastoFixo, gastoFixo.getFimData());
    }

    @GetMapping(value = "/usuario")
    public List<GastoFixo> findByUsuario(Principal principal) {
        Usuario logado = usuarioService.findUsuarioByEmail(principal.getName());
        return service.findByUsuario(logado);
    }

}
