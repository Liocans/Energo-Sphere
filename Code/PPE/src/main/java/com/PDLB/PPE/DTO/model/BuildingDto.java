package com.PDLB.PPE.DTO.model;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * A data transfer object (DTO) representing a building.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: a unique identifier for the building</li>
 *     <li>buildingName: the name of the building</li>
 *     <li>city: the city where the building is located</li>
 *     <li>isMain: a boolean indicating whether the building is the main one</li>
 *     <li>number: the building number</li>
 *     <li>room: the room number or identifier</li>
 *     <li>street: the street where the building is located</li>
 *     <li>zipCode: the ZIP code of the building's address</li>
 * </ul>
 */
public class BuildingDto {

    private String id;

    private String buildingName;

    private String city;

    @JsonProperty("main")
    private boolean isMain;

    private String number;

    private String room;

    private String street;

    private int zipCode;

    /**
     * Creates a new empty BuildingDto object.
     */
    public BuildingDto() {
    }

    /**
     * Creates a new BuildingDto object with the specified values.
     *
     * @param id           the ID of the building
     * @param buildingName the name of the building
     * @param city         the city where the building is located
     * @param isMain       a flag indicating whether the building is the main building of its location
     * @param number       the street number of the building
     * @param room         the room number or name of the building
     * @param street       the name of the street where the building is located
     * @param zipCode      the ZIP code of the building's location
     */
    public BuildingDto(String id, String buildingName, String city, boolean isMain, String number, String room, String street, int zipCode) {
        this.id = id;
        this.buildingName = buildingName;
        this.city = city;
        this.isMain = isMain;
        this.number = number;
        this.room = room;
        this.street = street;
        this.zipCode = zipCode;
    }

    /**
     * Creates a new BuildingDto object with the specified values.
     *
     * @param buildingName the name of the building
     * @param city         the city where the building is located
     * @param isMain       a flag indicating whether the building is the main building of its location
     * @param number       the street number of the building
     * @param room         the room number or name of the building
     * @param street       the name of the street where the building is located
     * @param zipCode      the ZIP code of the building's location
     */
    public BuildingDto(String buildingName, String city, boolean isMain, String number, String room, String street, int zipCode) {
        this(null, buildingName, city, isMain, number, room, street, zipCode);
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

    public boolean isMain() {
        return isMain;
    }

    public void setMain(boolean main) {
        isMain = main;
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

    public String getAddress() {
        return (buildingName.isEmpty() ? ("") : (buildingName + ", ")) + street + " " + number + ", " + zipCode + " " + city;
    }

    @Override
    public String toString() {
        return "BuildingDto{" +
                "id='" + id + '\'' +
                ", buildingName='" + buildingName + '\'' +
                ", city='" + city + '\'' +
                ", isMain=" + isMain +
                ", number='" + number + '\'' +
                ", room='" + room + '\'' +
                ", street='" + street + '\'' +
                ", zipCode=" + zipCode +
                '}';
    }
}
