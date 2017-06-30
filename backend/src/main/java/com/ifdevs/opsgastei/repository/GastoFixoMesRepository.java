package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.GastoFixoMes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mhenrique on 6/30/17.
 */
@RepositoryRestResource(path = "gastoFixoMes", collectionResourceRel = "gastoFixoMes")
public interface GastoFixoMesRepository extends CrudRepository<GastoFixoMes, Long> {
}
