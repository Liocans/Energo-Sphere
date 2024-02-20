package com.PDLB.PPE.DTO.model;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * A data transfer object (DTO) representing a meter.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li> id: The unique identifier for the meter.</li>
 *     <li>isNumeric: Whether the meter is numeric or not.</li>
 *     <li>value: The current value of the meter.</li>
 *     <li>energyTypeId: The ID of the energy type associated with the meter.</li>
 *     <li>meterHistoryIds: A list of unique identifiers for the meter's history entries.</li>
 *     <li>isOpen: The boolean to know if the meter is open or not.</li>
 * </ul>
 */
public class MeterDto {

    private String id;
    @JsonProperty("numeric")
    private boolean isNumeric;
    private float value;
    private EnergyTypeDto energyType;
    @JsonProperty("open")
    private boolean isOpen;

    /**
     * Constructs an empty MeterDto object.
     */
    public MeterDto() {
    }


    /**
     * Constructs a MeterDto object with the specified values.
     *
     * @param id         The unique identifier for the meter.
     * @param isNumeric  Whether the meter is numeric or not.
     * @param value      The current value of the meter.
     * @param energyType The ID of the energy type associated with the meter.
     * @param isOpen     The boolean to know if the meter is open or not.
     */
    public MeterDto(String id, boolean isNumeric, float value, EnergyTypeDto energyType, boolean isOpen) {
        this.id = id;
        this.isNumeric = isNumeric;
        this.value = value;
        this.energyType = energyType;
        this.isOpen = isOpen;
    }

    /**
     * Constructs a MeterDto object with the specified values and no history entries.
     *
     * @param isNumeric  Whether the meter is numeric or not.
     * @param value      The current value of the meter.
     * @param energyType The ID of the energy type associated with the meter.
     * @param isOpen     The boolean to know if the meter is open or not.
     */
    public MeterDto(boolean isNumeric, float value, EnergyTypeDto energyType, boolean isOpen) {
        this(null, isNumeric, value, energyType, isOpen);
    }

    /**
     * Constructs a MeterDto object with the specified values and no history entries.
     *
     * @param isNumeric  Whether the meter is numeric or not.
     * @param value      The current value of the meter.
     * @param isOpen     The boolean to know if the meter is open or not.
     */
    public MeterDto(String id, boolean isNumeric, float value, boolean isOpen) {
        this(id, isNumeric, value, null, isOpen);
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
        isNumeric = numeric;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public EnergyTypeDto getEnergyType() {
        return energyType;
    }

    public void setEnergyType(EnergyTypeDto energyType) {
        this.energyType = energyType;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    @Override
    public String toString() {
        return "MeterDto{" +
                "id='" + id + '\'' +
                ", isNumeric=" + isNumeric +
                ", value=" + value +
                ", energyType=" + energyType +
                ", isOpen=" + isOpen +
                '}';
    }
}
