package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Mes;
import com.ifdevs.opsgastei.repository.MesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alexia.pereira on 07/27/17
 */
@Service
public class MesService {

    private final MesRepository repository;

    @Autowired
    public MesService(MesRepository repository) {
        this.repository = repository;
    }

    public Iterable<Mes> findAll() {
        return repository.findAll();
    }

    public Mes update(Mes mes) {
        return repository.save(mes);
    }

    public Mes save(Mes mes) {
        return repository.save(mes);
    }

}
