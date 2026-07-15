package com.cognizant.jwt_authentication.controller;

import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt_authentication.model.AuthenticationResponse;
import com.cognizant.jwt_authentication.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        String base64Credentials = authorizationHeader.substring(6);

        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);

        String credentials = new String(decodedBytes);

        String username = credentials.split(":")[0];

        String token = JwtUtil.generateToken(username);

        return new AuthenticationResponse(token);
    }
}