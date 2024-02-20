package com.PDLB.PPE.API.security;

import com.PDLB.PPE.API.service.UserService;
import com.PDLB.PPE.Utility.PasswordHashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Configuration class for web security settings in the application.
 * Enables authentication and authorization settings for different endpoints,
 * and sets up filters for handling authentication and authorization.
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    @Autowired
    UserService userService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    /**
     * Returns an instance of AuthTokenFilter bean for handling authentication.
     *
     * @return AuthTokenFilter instance
     */
    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    /**
     * Returns an instance of DaoAuthenticationProvider bean for handling authentication.
     *
     * @return DaoAuthenticationProvider instance
     */
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userService);
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    /**
     * Returns an instance of AuthenticationManager bean for handling authentication.
     *
     * @param authConfig AuthenticationConfiguration instance
     * @return AuthenticationManager instance
     * @throws Exception if authentication manager cannot be created
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    /**
     * Returns an instance of PasswordEncoder bean for password hashing.
     *
     * @return PasswordEncoder instance
     */
    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new PasswordHashing();
    }

    /**
     * Returns a SecurityFilterChain for handling security for different endpoints.
     *
     * @param http HttpSecurity instance
     * @return SecurityFilterChain instance
     * @throws Exception if security filter chain cannot be created
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests().requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/customer/resetCustomerPassword").permitAll()
                .requestMatchers("/api/language/getAllLanguages").permitAll()
                .requestMatchers("/api/customer/createCustomer").permitAll()
                .requestMatchers("/api/test/**").permitAll()
                .requestMatchers("/").permitAll()
                .requestMatchers("/error").permitAll()
                .requestMatchers("/*.html").permitAll()
                .requestMatchers("/*.js").permitAll()
                .requestMatchers("/*.js.*").permitAll()
                .requestMatchers("/*.ico").permitAll()
                .requestMatchers("/*.css").permitAll()
                .requestMatchers("/*.css.*").permitAll()
                .requestMatchers("/*.woff2").permitAll()
                .requestMatchers("/*.woff").permitAll()
                .requestMatchers("/*.ttf").permitAll()
                .requestMatchers("/assets/**").permitAll()
                .anyRequest().authenticated();

        http.authenticationProvider(authenticationProvider());

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}