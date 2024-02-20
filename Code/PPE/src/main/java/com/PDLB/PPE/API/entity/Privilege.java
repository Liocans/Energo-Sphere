package com.PDLB.PPE.API.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a Privilege object based on the database.
 *
 * <p>The Privilege class encapsulates information about a privilege, including its ID and value.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the privilege object.</li>
 *     <li>value: The value of the privilege.</li>
 * </ul>
 */
@Entity
public class Privilege {

    @Id
    private int id;
    private String value;

    /**
     * Constructs an empty Role object.
     */
    public Privilege() {
    }

    /**
     * Constructs a privilege object with the given attributes.
     *
     * @param id    the ID of the privilege
     * @param value the value of the privilege
     */
    public Privilege(int id, String value) {
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
        return "Role{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
