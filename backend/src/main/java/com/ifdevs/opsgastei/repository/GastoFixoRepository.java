package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.model.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by mhenrique on 6/30/17.
 */
public interface GastoFixoRepository extends CrudRepository<GastoFixo, Long> {

    public List<GastoFixo> findByUsuario(Usuario usuario);
}
