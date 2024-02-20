package com.PDLB.PPE.API.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * This component handles authentication exceptions by returning an error message in the HTTP response.
 */
@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    /**
     * Method called when an authentication exception is thrown, returning an error message in the HTTP response.
     *
     * @param request       The HTTP request that resulted in the authentication exception.
     * @param response      The HTTP response to which the error message is written.
     * @param authException The authentication exception that occurred.
     * @throws IOException      If an I/O error occurs while writing the error message to the response.
     * @throws ServletException If a servlet-specific error occurs while handling the authentication exception.
     */
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        String errorMessage = authException.getMessage();
        if(!errorMessage.contains("Bad credentials")) {
            logger.error("Unauthorized error: {}", errorMessage);

            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            final Map<String, Object> body = new HashMap<>();
            body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
            body.put("message", errorMessage);
            body.put("path", request.getServletPath());

            final ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), body);
        }
    }
}
