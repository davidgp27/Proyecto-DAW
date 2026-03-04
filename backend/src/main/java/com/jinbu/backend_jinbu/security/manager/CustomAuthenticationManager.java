package com.jinbu.backend_jinbu.security.manager;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.jinbu.backend_jinbu.service.user.UserService;
import com.jinbu.backend_jinbu.service.user.UserServiceImplementation;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class CustomAuthenticationManager implements AuthenticationManager {

    private UserServiceImplementation userServiceImplementation;
    
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        User user = userServiceImplementation.getUser(authentication.getName())
    }

}
