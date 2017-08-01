package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Categoria;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.repository.CategoriaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alexia.pereira on 07/28/17
 */
@Service
public class CategoriaService {

    private final CategoriaRepository repository;

    @Autowired
    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public Iterable<Categoria> findAll() {
        return repository.findAll();
    }

    public Categoria update(Categoria categoria) {
        return repository.save(categoria);
    }

    public Categoria save(Categoria categoria) {
        return repository.save(categoria);
    }

    public List<Categoria> findByUsuario(Usuario usuario) {
        return repository.findByUsuario(usuario);
    }

}
