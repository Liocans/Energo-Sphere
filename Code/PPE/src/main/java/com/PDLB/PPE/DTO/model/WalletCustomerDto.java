package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a walletCustomer.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The ID of the wallet customer</li>
 *     <li>privilege: The privilege of the wallet customer, e.g. read-only or read-write</li>
 *     <li>customerId: The ID of the customer associated with the wallet customer</li>
 * </ul>
 */
public class WalletCustomerDto {

    private int id;

    private int privilegeId;

    private String customerId;

    /**
     * Constructs an empty WalletCustomerDto object.
     */
    public WalletCustomerDto() {
    }

    /**
     * Constructs a WalletCustomerDto object with the specified fields.
     *
     * @param privilegeId  the privilege of the wallet customer, e.g. read-only or read-write
     * @param customerId the ID of the customer associated with the wallet customer
     */
    public WalletCustomerDto(int id, int privilegeId, String customerId) {
        this.id = id;
        this.privilegeId = privilegeId;
        this.customerId = customerId;
    }

    public WalletCustomerDto(int privilegeId, String customerId) {
        this(0, privilegeId, customerId);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrivilegeId() {
        return privilegeId;
    }

    public void setPrivilegeId(int privilegeId) {
        this.privilegeId = privilegeId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return "WalletCustomerDto{" +
                "id=" + id +
                ", privilege='" + privilegeId + '\'' +
                ", customer=" + customerId +
                '}';
    }
}
