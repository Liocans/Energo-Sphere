package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a walletCustomer object based on the database.
 *
 * <p>The WalletCustomer class encapsulates information about a customer's wallet, including its ID and the ID of the customer it belongs to.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the walletCustomer object.</li>
 *     <li>privilege: The privilege of the walletCustomer object.</li>
 *     <li>customerId: The unique identifier of the customer the wallet belongs to.</li>
 *     <li>walletId: The unique identifier of the wallet object.</li>
 * </ul>
 */
@Entity
public class WalletCustomer {

    @Id
    private int id;

    @Column(name = "privilege_fk")
    private int privilegeId;

    @Column(name = "customer_fk")
    private String customerId;

    @Column(name = "wallet_fk")
    private String walletId;

    /**
     * Constructs an empty WalletCustomer object.
     */
    public WalletCustomer() {
    }


    public WalletCustomer(int id, int privilegeId, String customerId, String walletId) {
        this.id = id;
        this.privilegeId = privilegeId;
        this.customerId = customerId;
        this.walletId = walletId;
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

    public String getWalletId() {
        return walletId;
    }

    public void setWalletId(String walletId) {
        this.walletId = walletId;
    }

    @Override
    public String toString() {
        return "WalletCustomer{" +
                "id=" + id +
                ", privilege='" + privilegeId + '\'' +
                ", customerId='" + customerId + '\'' +
                ", walletId='" + walletId + '\'' +
                '}';
    }
}
