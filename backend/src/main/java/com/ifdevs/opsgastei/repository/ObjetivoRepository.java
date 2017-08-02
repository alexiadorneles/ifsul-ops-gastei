package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.Objetivo;
import com.ifdevs.opsgastei.model.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by mhenrique on 6/30/17.
 */
public interface ObjetivoRepository extends CrudRepository<Objetivo, Long> {

    public List<Objetivo> findByUsuario(Usuario usuario);
}
