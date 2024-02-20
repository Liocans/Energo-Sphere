package com.PDLB.PPE.graphic.model;

/**
 * Represents login information with a username and password.
 */
public class LoginInfo {
    private String username;
    private String password;

    /**
     * Constructs a new LoginInfo object with the specified username and password.
     *
     * @param username The username.
     * @param password The password.
     */
    public LoginInfo(String username, String password) {
        this.username = username;
        this.password = password;
    }

    /**
     * Gets the username.
     *
     * @return The username.
     */
    public String getUsername() {
        return username;
    }

    /**
     * Gets the password.
     *
     * @return The password.
     */
    public String getPassword() {
        return password;
    }


    /**
     * Returns a string representation of the login info (username).
     *
     * @return The username.
     */
    @Override
    public String toString() {
        return username;
    }
}