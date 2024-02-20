package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a customer object based on the database.
 *
 * <p>The Customer class encapsulates information about a customer, including their name, phone number, and email address.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the customer.</li>
 *     <li>name: The first name of the customer.</li>
 *     <li>surname: The last name of the customer.</li>
 *     <li>phoneNumber: The phone number of the customer.</li>
 *     <li>email: The email address of the customer.</li>
 * </ul>
 */
@Entity
public class Customer {

    @Id
    private String id;
    private String name;
    private String surname;
    @Column(name = "phone_number")
    private String phoneNumber;
    private String email;
    @Column(name = "language_fk")
    private int language;

    /**
     * Constructs an empty Customer object.
     */
    public Customer() {

    }

    /**
     * Constructor for the Customer class.
     *
     * @param id          The unique identifier for the customer.
     * @param name        The name of the customer.
     * @param surname     The surname of the customer.
     * @param phoneNumber The phone number of the customer.
     * @param email       The email of the customer.
     * @param language    The language of the customer
     */
    public Customer(String id, String name, String surname, String phoneNumber, String email, int language) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.language = language;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getLanguage() {
        return language;
    }

    public void setLanguage(int language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", language='" + language + '\'' +
                '}';
    }
}
