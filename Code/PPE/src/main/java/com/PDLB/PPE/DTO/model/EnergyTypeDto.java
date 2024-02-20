package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a energyType.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the energy type.</li>
 *     <li>value: The name of the energy type.</li>
 * </ul>
 */
public class EnergyTypeDto {

    private int id;
    private String value;

    /**
     * Constructs an empty EnergyTypeDto object.
     */
    public EnergyTypeDto() {
    }

    /**
     * Constructor that sets the ID and value of the energy type.
     *
     * @param id    The unique identifier for the energy type.
     * @param value The name of the energy type.
     */
    public EnergyTypeDto(int id, String value) {
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
        return "EnergyTypeDto{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
