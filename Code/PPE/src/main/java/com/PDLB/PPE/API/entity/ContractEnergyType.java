package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a contract energy type object based on the database.
 *
 * <p>The ContractEnergyType class encapsulates information about the pricing of a service contract for a particular type of energy.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the contract energy type.</li>
 *     <li>dayPrice: The price for energy during the day.</li>
 *     <li>nightPrice: The price for energy during the night.</li>
 *     <li>contractId: The unique identifier for the service contract that this energy type is associated with.</li>
 *     <li>energyTypeId: The unique identifier for the type of energy that this contract energy type represents.</li>
 * </ul>
 */
@Entity
public class ContractEnergyType {

    @Id
    private int id;
    @Column(name = "day_price")
    private int dayPrice;
    @Column(name = "night_price")
    private int nightPrice;
    @Column(name = "contract_fk")
    private String contractId;
    @Column(name = "energy_type_fk")
    private int energyTypeId;

    /**
     * Constructs an empty ContractEnergyType object.
     */
    public ContractEnergyType() {
    }

    /**
     * Constructor for the ContractEnergyType class.
     *
     * @param id           The unique identifier for the contract energy type.
     * @param dayPrice     The day price for the contract energy type.
     * @param nightPrice   The night price for the contract energy type.
     * @param contractId   The foreign key of the contract associated with the contract energy type.
     * @param energyTypeId The foreign key of the energy type associated with the contract energy type.
     */
    public ContractEnergyType(int id, int dayPrice, int nightPrice, String contractId, int energyTypeId) {
        this.id = id;
        this.dayPrice = dayPrice;
        this.nightPrice = nightPrice;
        this.contractId = contractId;
        this.energyTypeId = energyTypeId;
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

    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public int getEnergyTypeId() {
        return energyTypeId;
    }

    public void setEnergyTypeId(int energyTypeId) {
        this.energyTypeId = energyTypeId;
    }

    @Override
    public String toString() {
        return "ContractEnergyType{" +
                "id=" + id +
                ", dayPrice=" + dayPrice +
                ", nightPrice=" + nightPrice +
                ", contractId='" + contractId + '\'' +
                ", energyTypeId=" + energyTypeId +
                '}';
    }
}
