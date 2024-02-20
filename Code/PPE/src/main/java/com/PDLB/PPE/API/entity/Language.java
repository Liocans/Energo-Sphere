package com.PDLB.PPE.API.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a Language object based on the database.
 *
 * <p>The Language class encapsulates information about a particular language.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the language.</li>
 *     <li>value: The value of the language.</li>
 * </ul>
 */
@Entity
public class Language {

    @Id
    private int id;

    private String value;

    /**
     * Constructs an empty Language object.
     */
    public Language() {
    }

    /**
     * Constructor for the Language class.
     *
     * @param id    The unique identifier for the language.
     * @param value The value of the language.
     */
    public Language(int id, String value) {
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
        return "Language{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
