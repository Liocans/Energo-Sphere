package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.security.JwtUtils;
import com.PDLB.PPE.API.security.UserInfoResponse;
import com.PDLB.PPE.API.service.UserService;
import com.PDLB.PPE.DTO.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * This Controller allow us to use the different path to call specifiy method link to user
 */

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/auth")
public class UserController {


    @Autowired
    private UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    /**
     * Authenticates a user and generates a JWT cookie.
     *
     * @param username The username of the user to authenticate.
     * @param password The password of the user to authenticate.
     * @return A ResponseEntity containing a UserInfoResponse and a JWT cookie.
     */
    @PostMapping("/signin")
    public ResponseEntity<UserInfoResponse> authenticateUser(@RequestParam String username, @RequestParam String password) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDto userDto = (UserDto) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDto);

        List<String> roles = userDto.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new UserInfoResponse(
                        userDto.getId(),
                        userDto.getUsername(),
                        roles,
                        userDto.getLanguage(),
                        userDto.getName())
                );
    }

    /**
     * Logs out the currently authenticated user and removes the JWT cookie.
     *
     * @return A ResponseEntity with a clean JWT cookie and a message confirming the sign out.
     */
    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body("You've been signed out!");
    }

}
