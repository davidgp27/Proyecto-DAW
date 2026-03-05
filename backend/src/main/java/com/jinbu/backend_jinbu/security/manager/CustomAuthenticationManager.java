package com.jinbu.backend_jinbu.security.manager;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.jinbu.backend_jinbu.entities.User;
import com.jinbu.backend_jinbu.service.user.UserService;
import com.jinbu.backend_jinbu.service.user.UserServiceImplementation;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class CustomAuthenticationManager implements AuthenticationManager {

    private UserServiceImplementation userServiceImplementation;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        User user = userServiceImplementation.getUser(authentication.getName());
        if (!bCryptPasswordEncoder.matches(authentication.getCredentials().toString(), user.getPassword())) {
            throw new BadCredentialsException("You provided an incorrect password.");
        }

        return new UsernamePasswordAuthenticationToken(authentication.getName(), user.getPassword());
    }

}
