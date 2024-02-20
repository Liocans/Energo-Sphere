package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a walletMeter object in the database.
 *
 * <p>This class represents a relationship between a meter and a wallet. It contains the following properties:</p>
 * <ul>
 *     <li>id: an integer representing the identifier of the walletMeter object.</li>
 *     <li>meterId: a string representing the identifier of the meter associated with the walletMeter object.</li>
 *     <li>walletId: a string representing the identifier of the wallet associated with the walletMeter object.</li>
 * </ul>
 */
@Entity
public class WalletMeter {
    @Id
    private int id;

    @Column(name = "meter_fk")
    private String meterId;

    @Column(name = "wallet_fk")
    private String walletId;

    /**
     * Constructs an empty WalletMeter object.
     */
    public WalletMeter() {
    }


    public WalletMeter(int id, String meterId, String walletId) {
        this.id = id;
        this.meterId = meterId;
        this.walletId = walletId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMeterId() {
        return meterId;
    }

    public void setMeterId(String meterId) {
        this.meterId = meterId;
    }

    public String getWalletId() {
        return walletId;
    }

    public void setWalletId(String walletId) {
        this.walletId = walletId;
    }

    @Override
    public String toString() {
        return "WalletMeter{" +
                "id=" + id +
                ", meterId='" + meterId + '\'' +
                ", walletId='" + walletId + '\'' +
                '}';
    }
}
