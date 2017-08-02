package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.Salario;
import com.ifdevs.opsgastei.model.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by mhenrique on 7/29/17.
 */
public interface SalarioRepository extends CrudRepository<Salario, Long> {

    public List<Salario> findByUsuario(Usuario usuario);

    public int countByUsuario(Usuario usuario);

}
