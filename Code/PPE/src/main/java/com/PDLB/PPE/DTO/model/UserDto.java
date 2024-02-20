package com.PDLB.PPE.DTO.model;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Objects;

/**
 * A data transfer object (DTO) representing a user.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The ID of the user</li>
 *     <li>username: The username of the user</li>
 *     <li>password: The password of the user</li>
 *     <li>type: The type of user, e.g. admin or regular user</li>
 * </ul>
 */
public class UserDto implements UserDetails {

    private String id;

    private String username;

    private String password;

    private Collection<? extends GrantedAuthority> role;
    private String language;

    private String name;

    /**
     * Constructs an empty UserDto object.
     */
    public UserDto() {
    }

    /**
     * Constructs a UserDto object with the specified fields.
     *
     * @param id       the ID of the user
     * @param username the username of the user
     * @param password the password of the user
     * @param role     the type of user, e.g. admin or regular user
     * @param language the language of the user
     */
    public UserDto(String id, String username, String password, String role, String language) {
        this(id, username, password, role, language, null);
    }

    public UserDto(String id, String username, String password, String role, String language, String name) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = Collections.singleton(new SimpleGrantedAuthority(role));
        this.language = language;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDto user = (UserDto) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", type='" + role + '\'' +
                '}';
    }
}
