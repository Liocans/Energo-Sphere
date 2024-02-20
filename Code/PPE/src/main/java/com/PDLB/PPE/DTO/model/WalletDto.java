package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a wallet.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The ID of the wallet</li>
 *     <li>buildingId: The ID of the building associated with the wallet</li>
 *     <li>buildingAddress: The address of the building associated with the wallet</li>
 *     <li>meterIds: The IDs of the meters associated with the wallet</li>
 *     <li>customerPrivilege: The privilege of the customer associated with the wallet</li>
 *     <li>walletCustomerIds: The IDs of the wallet customers associated with the wallet</li>
 * </ul>
 */
public class WalletDto {

    private String id;
    private String buildingId;
    private String buildingAddress;
    private String customerPrivilege;


    /**
     * Constructs an empty WalletDto object.
     */
    public WalletDto() {
    }

    /**
     * Constructs a WalletDto object with the specified fields.
     *
     * @param id                the ID of the wallet
     * @param buildingId        the ID of the building associated with the wallet
     * @param buildingAddress   the address of the building associated with the wallet
     * @param customerPrivilege the privilege of the customer associated with the wallet
     */
    public WalletDto(String id, String buildingId, String buildingAddress, String customerPrivilege) {
        this.id = id;
        this.buildingId = buildingId;
        this.buildingAddress = buildingAddress;
        this.customerPrivilege = customerPrivilege;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(String buildingId) {
        this.buildingId = buildingId;
    }

    public String getBuildingAddress() {
        return buildingAddress;
    }

    public void setBuildingAddress(String buildingAddress) {
        this.buildingAddress = buildingAddress;
    }

    public String getCustomerPrivilege() {
        return customerPrivilege;
    }

    public void setCustomerPrivilege(String customerPrivilege) {
        this.customerPrivilege = customerPrivilege;
    }

    @Override
    public String toString() {
        return "WalletDto{" +
                "id='" + id + '\'' +
                ", building='" + buildingId + '\'' +
                '}';
    }
}
