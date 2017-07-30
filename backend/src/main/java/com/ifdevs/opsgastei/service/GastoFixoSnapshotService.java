package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.GastoFixoSnapshot;
import com.ifdevs.opsgastei.repository.GastoFixoSnapshotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by mhenrique on 7/29/17.
 */
@Service
public class GastoFixoSnapshotService {

    private GastoFixoSnapshotRepository repository;

    @Autowired
    public void setRepository(GastoFixoSnapshotRepository repository) {
        this.repository = repository;
    }

    public Iterable<GastoFixoSnapshot> findAll() {
        return repository.findAll();
    }

    public GastoFixoSnapshot update(GastoFixoSnapshot gastoFixoSnapshot) {
        return repository.save(gastoFixoSnapshot);
    }

    public GastoFixoSnapshot save(GastoFixoSnapshot gastoFixoSnapshot) {
        return repository.save(gastoFixoSnapshot);
    }

}
