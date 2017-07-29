package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.repository.GastoFixoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alexia.pereira on 07/28/17
 */
@Service
public class GastoFixoService {

    private final GastoFixoRepository repository;

    @Autowired
    public GastoFixoService(GastoFixoRepository repository) {
        this.repository = repository;
    }

    public Iterable<GastoFixo> findAll() {
        return repository.findAll();
    }

    public GastoFixo update(GastoFixo gastoFixo) {
        return repository.save(gastoFixo);
    }

    public GastoFixo save(GastoFixo gastoFixo) {
        return repository.save(gastoFixo);
    }

}
