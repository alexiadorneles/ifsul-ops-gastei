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

    public Usuario verificarUsuario(Usuario usuario) {
        Usuario existeNoBanco = this.findUsuarioByEmail(usuario.getEmail());
        if (existeNoBanco != null) {
            return existeNoBanco;
        } else {
            return this.save(usuario);
        }
    }

    public Usuario update(Usuario usuario) {
        return repository.save(usuario);
    }

    private Usuario save(Usuario usuario) {
        usuario.criptografarSenha();
        return repository.save(usuario);
    }

    public Usuario findById(Long idUsuario) {
        return repository.findOne(idUsuario);
    }

}
