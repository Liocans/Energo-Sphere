package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a customer.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the customer.</li>
 *     <li>name: The customer's first name.</li>
 *     <li>surname: The customer's last name.</li>
 *     <li>phoneNumber: The customer's phone number.</li>
 *     <li>email: The customer's email address.</li>
 * </ul>
 */
public class CustomerDto {

    private String id;
    private String name;
    private String surname;
    private String phoneNumber;
    private String email;
    private int language;

    /**
     * Constructs an empty CustomerDto object.
     */
    public CustomerDto() {
    }

    /**
     * Constructor with all parameters.
     *
     * @param id          The unique identifier of the customer.
     * @param name        The first name of the customer.
     * @param surname     The last name of the customer.
     * @param phoneNumber The phone number of the customer.
     * @param email       The email address of the customer.
     * @param language    The language of the customer
     */
    public CustomerDto(String id, String name, String surname, String phoneNumber, String email, int language) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.language = language;
    }

    /**
     * Constructor without buildingIds parameter.
     *
     * @param name        The first name of the customer.
     * @param surname     The last name of the customer.
     * @param phoneNumber The phone number of the customer.
     * @param email       The email address of the customer.
     * @param language    The language of the customer
     */
    public CustomerDto(String name, String surname, String phoneNumber, String email, int language) {
        this(null, name, surname, phoneNumber, email, language);
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

    public String getFullName(){
        return getName()+ " " + getSurname();
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
        return "CustomerDto{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
