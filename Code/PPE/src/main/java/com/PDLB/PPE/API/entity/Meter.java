package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a meter object based on the database.
 *
 * <p>The Meter class encapsulates information about a particular type of energy meter, including its ID, whether it is numeric or not, and its current value.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the meter.</li>
 *     <li>isNumeric: A boolean indicating whether the meter is numeric.</li>
 *     <li>value: The current value of the meter.</li>
 *     <li>buildingId: The ID of the building that the meter is associated with.</li>
 *     <li>energyTypeId: The ID of the energy type that the meter is associated with.</li>
 *     <li>isOpen: The boolean to know if the meter is open or not.</li>
 * </ul>
 */
@Entity
public class Meter {

    @Id
    private String id;
    @Column(name = "is_numeric")
    private boolean isNumeric;
    private float value;
    @Column(name = "building_fk")
    private String buildingId;
    @Column(name = "energy_type_fk")
    private int energyTypeId;
    @Column(name = "is_open")
    private boolean isOpen;

    /**
     * Constructs an empty Meter object.
     */
    public Meter() {
    }

    /**
     * Constructor for the Meter class.
     *
     * @param id           The unique identifier for the meter.
     * @param isNumeric    A boolean value indicating whether the meter is numeric or not.
     * @param value        The value of the meter.
     * @param buildingId   The unique identifier for the building the meter belongs to.
     * @param energyTypeId The unique identifier for the energy type measured by the meter.
     * @param isOpen       The boolean to know if the meter is open or not.
     */
    public Meter(String id, boolean isNumeric, float value, String buildingId, int energyTypeId, boolean isOpen) {
        this.id = id;
        this.isNumeric = isNumeric;
        this.value = value;
        this.buildingId = buildingId;
        this.energyTypeId = energyTypeId;
        this.isOpen = isOpen;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isNumeric() {
        return isNumeric;
    }

    public void setNumeric(boolean numeric) {
        this.isNumeric = numeric;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public String getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(String buildingId) {
        this.buildingId = buildingId;
    }

    public int getEnergyTypeId() {
        return energyTypeId;
    }

    public void setEnergyTypeId(int energyTypeId) {
        this.energyTypeId = energyTypeId;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    @Override
    public String toString() {
        return "Meter{" +
                "id='" + id + '\'' +
                ", isNumeric=" + isNumeric +
                ", value=" + value +
                ", buildingId='" + buildingId + '\'' +
                ", energyTypeId=" + energyTypeId +
                '}';
    }
}
