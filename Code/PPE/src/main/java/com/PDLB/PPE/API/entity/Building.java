package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a building object based on the database.
 *
 * <p>The Building class encapsulates information about a building, including its name, location, and owner.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the building.</li>
 *     <li>buildingName: The name of the building.</li>
 *     <li>city: The city in which the building is located.</li>
 *     <li>isMain: A boolean value indicating whether the building is the main building for the owner.</li>
 *     <li>number: The building number or street number.</li>
 *     <li>room: The room or suite number, if applicable.</li>
 *     <li>street: The street on which the building is located.</li>
 *     <li>zipCode: The ZIP code of the building's location.</li>
 *     <li>customerId: The unique identifier for the customer that owns the building.</li>
 * </ul>
 */
@Entity
public class Building {

    @Id
    private String id;
    @Column(name = "building_name")
    private String buildingName;
    private String city;
    @Column(name = "is_main")
    private boolean isMain;
    private String number;
    private String room;
    private String street;
    @Column(name = "zip_code")
    private int zipCode;
    @Column(name = "customer_fk")
    private String customerId;

    /**
     * Constructs an empty Building object.
     */
    public Building() {
    }

    /**
     * Constructs a Building object with specified properties.
     *
     * @param id           The building id
     * @param buildingName The building name
     * @param city         The city where the building is located
     * @param isMain       A flag indicating whether the building is the main building
     * @param number       The building number
     * @param room         The building room
     * @param street       The street where the building is located
     * @param zipCode      The zip code of the building
     * @param customerId   The id of the customer who owns the building
     */
    public Building(String id, String buildingName, String city, boolean isMain, String number, String room, String street, int zipCode, String customerId) {
        this.id = id;
        this.buildingName = buildingName;
        this.city = city;
        this.isMain = isMain;
        this.number = number;
        this.room = room;
        this.street = street;
        this.zipCode = zipCode;
        this.customerId = customerId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBuildingName() {
        return buildingName;
    }

    public void setBuildingName(String buildingName) {
        this.buildingName = buildingName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public boolean isMain() {
        return isMain;
    }

    public void setMain(boolean main) {
        this.isMain = main;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    @Override
    public String toString() {
        return "Building{" +
                "id='" + id + '\'' +
                ", buildingName='" + buildingName + '\'' +
                ", city='" + city + '\'' +
                ", isMain=" + isMain +
                ", number='" + number + '\'' +
                ", room='" + room + '\'' +
                ", street='" + street + '\'' +
                ", zipCode=" + zipCode +
                ", customerId='" + customerId + '\'' +
                '}';
    }
}
