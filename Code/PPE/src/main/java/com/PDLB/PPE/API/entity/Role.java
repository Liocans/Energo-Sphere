package com.PDLB.PPE.API.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a Role object based on the database.
 *
 * <p>The Role class encapsulates information about a role, including its ID and value.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the role object.</li>
 *     <li>value: The value of the role.</li>
 * </ul>
 */
@Entity
public class Role {

    @Id
    private int id;
    private String value;

    /**
     * Constructs an empty Role object.
     */
    public Role() {
    }

    /**
     * Constructs a Role object with the given attributes.
     *
     * @param id    the ID of the role
     * @param value the value of the role
     */
    public Role(int id, String value) {
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
