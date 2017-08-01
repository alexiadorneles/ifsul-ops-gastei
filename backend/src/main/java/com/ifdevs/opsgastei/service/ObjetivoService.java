package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Objetivo;
import com.ifdevs.opsgastei.repository.ObjetivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alexia.pereira on 07/28/17
 */
@Service
public class ObjetivoService {

    private final ObjetivoRepository repository;

    @Autowired
    public ObjetivoService(ObjetivoRepository repository) {
        this.repository = repository;
    }

    public Iterable<Objetivo> findAll() {
        return repository.findAll();
    }

    public Objetivo update(Objetivo objetivo) {
        return repository.save(objetivo);
    }

    public Objetivo save(Objetivo objetivo) {
        return repository.save(objetivo);
    }

    public void remove(Objetivo objetivo) {
        repository.delete(objetivo);
    }

    public Objetivo loadById(Long id) {
        return repository.findOne(id);
    }

}
