package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a user object based on the database.
 *
 * <p>The User class encapsulates information about a user, including its ID, username, password, and type.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the user object.</li>
 *     <li>username: The username of the user.</li>
 *     <li>password: The password of the user.</li>
 *     <li>type: The type of the user.</li>
 * </ul>
 */
@Entity
public class User {

    @Id
    private String id;
    private String username;
    private String password;
    @Column(name = "role_fk")
    private int role;
    @Column(name = "language_fk")
    private int language;

    /**
     * Constructs an empty User object.
     */
    public User() {
    }

    /**
     * Constructs a User object with the given ID, username, password, and type.
     *
     * @param id       the ID of the user
     * @param username the username of the user
     * @param password the password of the user
     * @param role     the type of the user
     * @param language the language of the user
     */
    public User(String id, String username, String password, int role, int language) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.language = language;
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

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public int getLanguage() {
        return language;
    }

    public void setLanguage(int language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
