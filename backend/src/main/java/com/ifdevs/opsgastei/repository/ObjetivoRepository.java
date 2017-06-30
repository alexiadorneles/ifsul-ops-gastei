package com.ifdevs.opsgastei.repository;

import com.ifdevs.opsgastei.model.Objetivo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mhenrique on 6/30/17.
 */
@RepositoryRestResource(path = "objetivos", collectionResourceRel = "objetivos")
public interface ObjetivoRepository extends CrudRepository<Objetivo, Long> {
}
