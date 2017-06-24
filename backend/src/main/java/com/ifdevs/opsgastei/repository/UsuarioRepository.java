package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.Usuario;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by mhenrique on 6/23/17.
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
    Usuario findByEmail(String email);
}
