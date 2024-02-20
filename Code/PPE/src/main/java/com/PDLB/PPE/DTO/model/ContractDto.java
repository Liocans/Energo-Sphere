package com.PDLB.PPE.DTO.model;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * A data transfer object (DTO) representing a contract.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: a unique identifier for the contract</li>
 *     <li>startDate: the start date of the contract</li>
 *     <li>endDate: the end date of the contract</li>
 *     <li>providerId: a unique identifier for the provider associated with the contract</li>
 *     <li>providerName: The name of the provider</li>
 *     <li>contractType: the type of the contract</li>
 *     <li>contractEnergyType: the energy type of the contract</li>
 *     <li>buildingId: a unique identifier for the building associated with the contract</li>
 *     <li>buildingAdress: the address of the building associated with the contract</li>
 *     <li>customerId: a unique identifier for the customer associated with the contract</li>
 * </ul>
 */
public class ContractDto {

    private String id;
    private LocalDate startDate;
    private LocalDate endDate;
    private String providerId;
    private String providerName;
    private ContractTypeDto contractType;
    private ArrayList<ContractEnergyTypeDto> contractEnergyType;
    private String buildingId;
    private String buildingAdress;
    private String customerId;

    /**
     * Creates a new, empty ContractDto object.
     */
    public ContractDto() {
    }

    /**
     * Creates a new ContractDto object with the specified parameters.
     *
     * @param id              The ID of the contract
     * @param startDate       The start date of the contract
     * @param endDate         The end date of the contract
     * @param providerId      The ID of the provider associated with the contract
     * @param providerName    The name of the provider associated with the contract
     * @param contractType    The ID of the contract typ
     * @param contractEnergyType the energy type of contract
     * @param buildingId      The ID of the building associated with the contract
     * @param buildingAddress The address of the building associated with the contract
     * @param customerId      The ID of the customer associated with the contract
     */
    public ContractDto(String id, LocalDate startDate, LocalDate endDate, String providerId, String providerName, ContractTypeDto contractType, ArrayList<ContractEnergyTypeDto> contractEnergyType, String buildingId, String buildingAddress, String customerId) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.providerId = providerId;
        this.providerName = providerName;
        this.contractType = contractType;
        this.buildingId = buildingId;
        this.buildingAdress = buildingAddress;
        this.customerId = customerId;
        this.contractEnergyType = contractEnergyType;
    }

    /**
     * Creates a new ContractDto object with the specified parameters.
     *
     * @param id              The ID of the contract
     * @param startDate       The start date of the contract
     * @param endDate         The end date of the contract
     * @param providerId      The ID of the provider associated with the contract
     * @param providerName    The name of the provider associated with the contract
     * @param contractType    The ID of the contract type
     * @param buildingId      The ID of the building associated with the contract
     * @param buildingAddress The address of the building associated with the contract
     * @param customerId      The ID of the customer associated with the contract
     */
    public ContractDto(String id, LocalDate startDate, LocalDate endDate, String providerId, String providerName, ContractTypeDto contractType, String buildingId, String buildingAddress, String customerId) {
        this(id, startDate, endDate, providerId, providerName, contractType, null, buildingId, buildingAddress, customerId);
    }

    /**
     * Creates a new ContractDto object with the specified parameters, but with a null value for providerName and buildingAddress.
     *
     * @param id           The ID of the contract
     * @param startDate    The start date of the contract
     * @param endDate      The end date of the contract
     * @param providerId   The ID of the provider associated with the contract
     * @param contractType The ID of the contract type
     * @param buildingId   The ID of the building associated with the contract
     * @param customerId   The ID of the customer associated with the contract
     */
    public ContractDto(String id, LocalDate startDate, LocalDate endDate, String providerId, ContractTypeDto contractType, String buildingId, String customerId) {
        this(id, startDate, endDate, providerId, null, contractType, buildingId, null, customerId);
    }

    /**
     * Creates a new ContractDto object with the specified parameters, but with the ID field is set to null
     *
     * @param startDate    the start date of the contract
     * @param endDate      the end date of the contract
     * @param providerId   the ID of the provider associated with the contract
     * @param contractType the ID of the contract type
     * @param buildingId   the ID of the building associated with the contract
     * @param customerId   the ID of the customer associated with the contract
     */
    public ContractDto(LocalDate startDate, LocalDate endDate, String providerId, ContractTypeDto contractType, String buildingId, String customerId) {
        this(null, startDate, endDate, providerId, contractType, buildingId, customerId);
    }

    /**
     * Creates a new ContractDto object with the specified parameters, but with customer ID and contract energy types fields are set to null.
     *
     * @param startDate    the start date of the contract
     * @param endDate      the end date of the contract
     * @param providerId   the ID of the provider associated with the contract
     * @param contractType the ID of the contract type
     * @param buildingId   the ID of the building associated with the contract
     */
    public ContractDto(LocalDate startDate, LocalDate endDate, String providerId, ContractTypeDto contractType, String buildingId) {
        this(startDate, endDate, providerId, contractType, buildingId, null);
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

    public ContractTypeDto getContractType() {
        return contractType;
    }

    public void setContractType(ContractTypeDto contractType) {
        this.contractType = contractType;
    }

    public String getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(String buildingId) {
        this.buildingId = buildingId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getBuildingAdress() {
        return buildingAdress;
    }

    public void setBuildingAdress(String buildingAdress) {
        this.buildingAdress = buildingAdress;
    }

    public ArrayList<ContractEnergyTypeDto> getContractEnergyType() {
        return contractEnergyType;
    }

    public void setContractEnergyType(ArrayList<ContractEnergyTypeDto> contractEnergyType) {
        this.contractEnergyType = contractEnergyType;
    }

    @Override
    public String toString() {
        return "ContractDto{" +
                "id='" + id + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", providerId='" + providerId + '\'' +
                ", providerName='" + providerName + '\'' +
                ", contractType=" + contractType +
                ", contractEnergyType=" + contractEnergyType +
                ", buildingId='" + buildingId + '\'' +
                ", buildingAdress='" + buildingAdress + '\'' +
                ", customerId='" + customerId + '\'' +
                '}';
    }
}
