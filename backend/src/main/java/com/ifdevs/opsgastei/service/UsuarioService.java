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

    public Usuario findUsuarioByEmail(String email) {
        return repository.findByEmail(email);
    }

    public Iterable<Usuario> findAll() {
        return repository.findAll();
    }

    public int verificarUsuario(Usuario usuario) {
        Usuario autorizado = this.findUsuarioByEmail(usuario.getEmail());
        if (autorizado != null) {
            return 1;
        } else {
            this.save(usuario);
            return 0;
        }
    }

    public Usuario update(Usuario usuario) {
        return repository.save(usuario);
    }

    private Usuario save(Usuario usuario) {
        usuario.criptografarSenha();
        return repository.save(usuario);
    }

}
