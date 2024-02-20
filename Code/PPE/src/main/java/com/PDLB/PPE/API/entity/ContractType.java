package com.PDLB.PPE.API.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a contract type object based on the database.
 *
 * <p>The ContractType class encapsulates information about the type of service contract that is being used.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the contract type.</li>
 *     <li>value: The value of the contract type.</li>
 * </ul>
 */
@Entity
public class ContractType {

    @Id
    private int id;
    private String value;

    /**
     * Constructs an empty ContractType object.
     */
    public ContractType() {
    }

    /**
     * Constructor for the ContractType class.
     *
     * @param id    The unique identifier for the contract type.
     * @param value The value of the contract type.
     */
    public ContractType(int id, String value) {
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
        return "ContractType{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
