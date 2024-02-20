package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a provider object based on the database.
 *
 * <p>The Provider class encapsulates information about a service provider, including its ID, name, address, and zip code.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the provider object.</li>
 *     <li>name: The name of the provider.</li>
 *     <li>street: The street address of the provider.</li>
 *     <li>number: The house or building number of the provider's address.</li>
 *     <li>city: The city in which the provider is located.</li>
 *     <li>country: The country in which the provider is located.</li>
 *     <li>zipCode: The zip code of the provider's address.</li>
 *     <li>zipCode: The language of the Provider</li>
 * </ul>
 */
@Entity
public class Provider {

    @Id
    private String id;
    private String name;
    private String street;
    private String number;
    private String city;
    private String country;
    @Column(name = "zip_code")
    private int zipCode;
    @Column(name = "language_fk")
    private int language;

    /**
     * Constructs an empty Provider object.
     */
    public Provider() {
    }

    /**
     * Constructs a Provider object with the given attributes.
     *
     * @param id       the ID of the provider
     * @param name     the name of the provider
     * @param street   the street address of the provider
     * @param number   the street number of the provider
     * @param city     the city where the provider is located
     * @param country  the country where the provider is located
     * @param zipCode  the ZIP code of the provider's location
     * @param language the language of the provider
     */
    public Provider(String id, String name, String street, String number, String city, String country, int zipCode, int language) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.number = number;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
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

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public int getLanguage() {
        return language;
    }

    public void setLanguage(int language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "Provider{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", street='" + street + '\'' +
                ", number='" + number + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", zipCode=" + zipCode +
                ", language='" + language + '\'' +
                '}';
    }
}
