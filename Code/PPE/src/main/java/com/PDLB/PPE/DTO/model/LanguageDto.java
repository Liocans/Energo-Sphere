package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a language.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the language.</li>
 *     <li>value: The value of the language.</li>
 * </ul>
 */
public class LanguageDto {

    private int id;
    private String value;

    /**
     * Constructs an empty LanguageDto object.
     */
    public LanguageDto() {
    }

    /**
     * Constructor for the LanguageDto class.
     *
     * @param id    The unique identifier for the language.
     * @param value The value of the language.
     */
    public LanguageDto(int id, String value) {
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
        return "LanguageDto{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}