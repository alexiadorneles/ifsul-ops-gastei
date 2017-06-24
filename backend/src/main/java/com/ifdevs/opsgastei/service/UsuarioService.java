package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by mhenrique on 6/24/17.
 */
@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    @Autowired
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    Usuario findUsuarioByEmail(String email) {
        return repository.findByEmail(email);
    }
}
