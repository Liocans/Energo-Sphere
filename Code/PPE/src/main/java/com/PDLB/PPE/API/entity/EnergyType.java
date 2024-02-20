package com.PDLB.PPE.API.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents an energy type object based on the database.
 *
 * <p>The EnergyType class encapsulates information about a particular type of energy that is being used.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the energy type.</li>
 *     <li>value: The value of the energy type.</li>
 * </ul>
 */
@Entity
public class EnergyType {

    @Id
    private int id;
    private String value;

    /**
     * Constructs an empty EnergyType object.
     */
    public EnergyType() {
    }

    /**
     * Constructor for the EnergyType class.
     *
     * @param id    The unique identifier for the energy type.
     * @param value The value of the energy type.
     */
    public EnergyType(int id, String value) {
        this.id = id;
        this.value = value;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "EnergyType{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
