package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

/**
 * Represents a contract object based on the database.
 *
 * <p>The Contract class encapsulates information about a service contract, including the start and end dates, the provider, and the building that the contract is associated with.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the contract.</li>
 *     <li>startDate: The start date of the contract.</li>
 *     <li>endDate: The end date of the contract.</li>
 *     <li>providerId: The unique identifier for the provider of the service.</li>
 *     <li>contractTypeId: The unique identifier for the type of service contract.</li>
 *     <li>buildingId: The unique identifier for the building associated with the contract.</li>
 * </ul>
 */
@Entity
public class Contract {

    @Id
    private String id;
    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;
    @Column(name = "provider_fk")
    private String providerId;
    @Column(name = "contract_type_fk")
    private int contractTypeId;
    @Column(name = "building_fk")
    private String buildingId;

    /**
     * Constructs an empty Contract object.
     */
    public Contract() {
    }

    /**
     * Constructs a Contract object with the given parameters.
     *
     * @param id             The contract's unique identifier.
     * @param startDate      The contract's start date.
     * @param endDate        The contract's end date.
     * @param providerId     The ID of the provider associated with the contract.
     * @param contractTypeId The ID of the contract type associated with the contract.
     * @param buildingId     The ID of the building associated with the contract.
     */
    public Contract(String id, LocalDate startDate, LocalDate endDate, String providerId, int contractTypeId, String buildingId) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.providerId = providerId;
        this.contractTypeId = contractTypeId;
        this.buildingId = buildingId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public int getContractTypeId() {
        return contractTypeId;
    }

    public void setContractTypeId(int contractTypeId) {
        this.contractTypeId = contractTypeId;
    }

    public String getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(String buildingId) {
        this.buildingId = buildingId;
    }

    @Override
    public String toString() {
        return "Contract{" +
                "id='" + id + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", providerId='" + providerId + '\'' +
                ", contractTypeId=" + contractTypeId +
                ", buildingId='" + buildingId + '\'' +
                '}';
    }

}
