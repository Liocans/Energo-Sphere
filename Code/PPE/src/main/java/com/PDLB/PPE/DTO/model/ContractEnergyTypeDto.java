package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a contractEnergyType.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: the unique identifier of the contract energy type</li>
 *     <li>dayPrice: the price of energy during the day for this contract energy type</li>
 *     <li>nightPrice: the price of energy during the night for this contract energy type</li>
 *     <li>energyTypeId: the unique identifier of the energy type associated with this contract energy type</li>
 * </ul>
 */
public class ContractEnergyTypeDto {

    private int id;
    private int dayPrice;
    private int nightPrice;
    private int energyTypeId;

    /**
     * Creates a new, empty ContractDto object.
     */
    public ContractEnergyTypeDto() {
    }

    /**
     * Creates a new ContractEnergyTypeDto object with the specified parameters.
     *
     * @param id           the ID of the contract energy type
     * @param dayPrice     the day price of the contract energy type
     * @param nightPrice   the night price of the contract energy type
     * @param energyTypeId the ID of the energy type associated with the contract energy type
     */
    public ContractEnergyTypeDto(int id, int dayPrice, int nightPrice, int energyTypeId) {
        this.id = id;
        this.dayPrice = dayPrice;
        this.nightPrice = nightPrice;
        this.energyTypeId = energyTypeId;
    }

    /**
     * Constructor for the ContractEnergyType class.
     *
     * @param dayPrice     The day price for the contract energy type.
     * @param nightPrice   The night price for the contract energy type.
     * @param energyTypeId The foreign key of the energy type associated with the contract energy type.
     */
    public ContractEnergyTypeDto(int dayPrice, int nightPrice, int energyTypeId) {
        this(0, dayPrice, nightPrice, energyTypeId);
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDayPrice() {
        return dayPrice;
    }

    public void setDayPrice(int dayPrice) {
        this.dayPrice = dayPrice;
    }

    public int getNightPrice() {
        return nightPrice;
    }

    public void setNightPrice(int nightPrice) {
        this.nightPrice = nightPrice;
    }

    public int getEnergyTypeId() {
        return energyTypeId;
    }

    public void setEnergyTypeId(int energyTypeId) {
        this.energyTypeId = energyTypeId;
    }

    @Override
    public String toString() {
        return "ContractEnergyTypeDto{" +
                "id=" + id +
                ", dayPrice=" + dayPrice +
                ", nightPrice=" + nightPrice +
                ", energyType=" + energyTypeId +
                '}';
    }
}
