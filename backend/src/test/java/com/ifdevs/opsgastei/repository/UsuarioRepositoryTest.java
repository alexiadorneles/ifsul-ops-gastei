package com.ifdevs.opsgastei.repository;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;
import com.ifdevs.opsgastei.model.Usuario;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by mhenrique on 7/1/17.
 */
@DatabaseSetup("classpath:dataset/dataset.xml")
@DatabaseTearDown(type = DatabaseOperation.DELETE_ALL, value = "classpath:dataset/dataset.xml")
public class UsuarioRepositoryTest extends BaseRepositoryTest {

    @Autowired
    private UsuarioRepository repository;
    private Usuario usuario;

    @Before
    @Test
    public void setUp(){
        usuario = new Usuario();
        usuario.setEmail("ifsul4@ifsul");
        usuario.setSalario(3000.0);
        usuario.setSenha("123");
    }

    @Test
    public void testSave(){
        assertNull(usuario.getId());
        usuario = repository.save(usuario);
        assertNotNull(usuario.getId());
    }

    @Test
    public void testCount(){
        assertEquals(3, repository.count());
    }
}
