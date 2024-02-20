package com.PDLB.PPE.API.security;

import com.PDLB.PPE.DTO.model.UserDto;
import io.jsonwebtoken.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import java.util.Date;

/**
 * JwtUtils is responsible for handling JWT (JSON Web Token) related tasks, such as generating
 * JWT tokens, parsing tokens, and validating tokens.
 */
@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${ppe.app.jwtSecret}")
    private String jwtSecret;

    @Value("${ppe.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    @Value("${ppe.app.jwtCookieName}")
    private String jwtCookie;

    /**
     * Retrieves the JWT token from a cookie in the given HTTP request.
     *
     * @param request the HTTP request to retrieve the JWT token from
     * @return the JWT token string or null if it doesn't exist
     */
    public String getJwtFromCookies(HttpServletRequest request) {
        Cookie cookie = WebUtils.getCookie(request, jwtCookie);
        if (cookie != null) {
            return cookie.getValue();
        } else {
            return null;
        }
    }

    /**
     * Generates a new JWT cookie for the given user principal.
     *
     * @param userPrincipal the user principal to generate a JWT token for
     * @return the new JWT cookie
     */
    public ResponseCookie generateJwtCookie(UserDto userPrincipal) {
        String jwt = generateTokenFromUsername(userPrincipal.getUsername());
        ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
        return cookie;
    }

    /**
     * Generates a new, empty JWT cookie.
     *
     * @return the new, empty JWT cookie
     */
    public ResponseCookie getCleanJwtCookie() {
        ResponseCookie cookie = ResponseCookie.from(jwtCookie, null).path("/api").build();
        return cookie;
    }

    /**
     * Retrieves the username from the given JWT token.
     *
     * @param token the JWT token string to retrieve the username from
     * @return the username contained within the JWT token
     */
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    /**
     * Validates the given JWT token.
     *
     * @param authToken the JWT token to validate
     * @return true if the token is valid, false otherwise
     */
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }

    /**
     * Generates a new JWT token for the given username.
     *
     * @param username the username to generate a token for
     * @return the new JWT token
     */
    public String generateTokenFromUsername(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
}
