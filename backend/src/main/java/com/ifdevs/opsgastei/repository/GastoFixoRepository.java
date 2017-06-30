package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.GastoFixo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mhenrique on 6/30/17.
 */
@RepositoryRestResource(path = "gastosFixos", collectionResourceRel = "gastosFixos")
public interface GastoFixoRepository extends CrudRepository<GastoFixo, Long> {
}
