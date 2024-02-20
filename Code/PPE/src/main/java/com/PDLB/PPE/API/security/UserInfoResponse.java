package com.PDLB.PPE.API.security;

import java.util.List;

/**
 * Represents a response containing user information.
 * <p>The UserInfoResponse class contains information about a user, including the user's ID, username, roles, and language.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the user.</li>
 *     <li>username: The username of the user.</li>
 *     <li>roles: The list of roles assigned to the user.</li>
 *     <li>language: The language in which the user prefers to receive information.</li>
 *     </ul>
 */
public class UserInfoResponse {


    private String id;
    private String username;
    private List<String> roles;
    private String language;
    private String name;

    /**
     * Constructor for UserInfoResponse
     *
     * @param id       The id of the user
     * @param username The username of the user
     * @param roles    The list of roles assigned to the user
     * @param language The language of the user
     */
    public UserInfoResponse(String id, String username, List<String> roles, String language, String name) {
        this.id = id;
        this.username = username;
        this.roles = roles;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "UserInfoResponse{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", roles=" + roles +
                ", language='" + language + '\'' +
                '}';
    }
}
