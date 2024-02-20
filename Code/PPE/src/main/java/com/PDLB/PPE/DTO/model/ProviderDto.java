package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a provider.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The ID of the provider</li>
 *     <li>name: The name of the provider</li>
 *     <li>street: The street name of the provider's address</li>
 *     <li>number: The number of the provider's address</li>
 *     <li>city: The city of the provider's address</li>
 *     <li>country: The country of the provider's address</li>
 *     <li>zipCode: The ZIP code of the provider's address</li>
 *     <li>energyTypesIds: The IDs of the energy types supported by the provider</li>
 *     <li>customerIds: The IDs of the customers associated with the provider</li>
 * </ul>
 */
public class ProviderDto {

    private String id;
    private String name;
    private String street;
    private String number;
    private String city;
    private String country;
    private int zipCode;
    private int language;

    /**
     * Constructs an empty ProviderDto object.
     */
    public ProviderDto() {
    }

    /**
     * Constructs a ProviderDto object with the specified properties.
     *
     * @param id       the unique identifier of the provider
     * @param name     the name of the provider
     * @param street   the street of the provider's address
     * @param number   the number of the provider's address
     * @param city     the city of the provider's address
     * @param country  the country of the provider's address
     * @param zipCode  the ZIP code of the provider's address
     * @param language the language of the provider
     */
    public ProviderDto(String id, String name, String street, String number, String city, String country, int zipCode, int language) {
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
        return "ProviderDto{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", street='" + street + '\'' +
                ", number='" + number + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", zipCode=" + zipCode +
                '}';
    }
}
