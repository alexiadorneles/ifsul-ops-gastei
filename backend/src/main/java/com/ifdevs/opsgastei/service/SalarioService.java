package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Salario;
import com.ifdevs.opsgastei.repository.SalarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by mhenrique on 7/29/17.
 */
@Service
public class SalarioService {

    private SalarioRepository repository;

    @Autowired
    public void setRepository(SalarioRepository repository) {
        this.repository = repository;
    }

    public Iterable<Salario> findAll() {
        return repository.findAll();
    }

    public Salario update(Salario salario) {
        return repository.save(salario);
    }

    public Salario save(Salario salario) {
        return repository.save(salario);
    }

}
