package com.ifdevs.opsgastei.service;

import com.ifdevs.opsgastei.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by mhenrique on 6/24/17.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final Set<GrantedAuthority> grantedAuthorities;
    private final UsuarioService usuarioService;

    @Autowired
    public UserDetailsServiceImpl(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
        this.grantedAuthorities = new HashSet<>();

        GrantedAuthority authority = new SimpleGrantedAuthority("AUTH");
        grantedAuthorities.add(authority);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Usuario usuario = usuarioService.findUsuarioByEmail(s);

        if (usuario != null) {
            return new User(usuario.getEmail(), usuario.getSenha(), grantedAuthorities);
        } else {
            throw new UsernameNotFoundException("Usuário não Encontrado.");
        }
    }
}
