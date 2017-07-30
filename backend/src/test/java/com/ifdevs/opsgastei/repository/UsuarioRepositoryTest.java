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

    // TODO tests
    @Test
    public void contextLoads() {
    }
}
