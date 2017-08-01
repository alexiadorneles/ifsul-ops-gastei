package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.Categoria;
import com.ifdevs.opsgastei.model.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by mhenrique on 6/30/17.
 */
public interface CategoriaRepository extends CrudRepository<Categoria, Long> {

    List<Categoria> findByUsuario(Usuario usuario);
}
