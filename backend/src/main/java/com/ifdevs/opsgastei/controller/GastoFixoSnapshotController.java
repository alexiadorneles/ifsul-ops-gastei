package com.ifdevs.opsgastei.controller;

import com.ifdevs.opsgastei.model.GastoFixoSnapshot;
import com.ifdevs.opsgastei.model.Objetivo;
import com.ifdevs.opsgastei.service.GastoFixoSnapshotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mhenrique on 7/29/17.
 */
@RestController
@RequestMapping("gastos-fixos-snapshot")
public class GastoFixoSnapshotController {

    @Autowired
    private GastoFixoSnapshotService service;

    @GetMapping
    public Iterable<GastoFixoSnapshot> findAll() {
        return service.findAll();
    }

    @PostMapping
    public GastoFixoSnapshot save(@RequestBody GastoFixoSnapshot gastoFixoSnapshot) {
        return service.save(gastoFixoSnapshot);
    }

    @PutMapping
    public GastoFixoSnapshot update(@RequestBody GastoFixoSnapshot gastoFixoSnapshot) {
        return service.update(gastoFixoSnapshot);
    }

}
