package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.GastoFixo;
import com.ifdevs.opsgastei.model.Usuario;
import com.ifdevs.opsgastei.repository.GastoFixoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;

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

    public List<GastoFixo> findByUsuario(Usuario usuario) {
        return repository.findByUsuario(usuario); 
    }

    public GastoFixo encerrar(GastoFixo enviado, Date encerramento) {
        GastoFixo gastoFixo = repository.findOne(enviado.getId());
        if (gastoFixo == null) {
            throw new RuntimeException("GastoFixo não encontrado"); // até exception padrao
        }

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(encerramento);
        calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, 1); // para melhor consistencia da datas

        gastoFixo.setFimData(calendar.getTime());
        
        return gastoFixo;
        
    }

}
