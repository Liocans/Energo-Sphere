package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

/**
 * Represents a wallet object based on the database.
 *
 * <p>The Wallet class encapsulates information about a wallet, including its ID and the ID of the building it belongs to.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the wallet object.</li>
 *     <li>buildingId: The unique identifier of the building the wallet belongs to.</li>
 * </ul>
 */
@Entity
public class Wallet {

    @Id
    private String id;
    @Column(name = "building_fk")
    private String buildingId;

    /**
     * Constructs an empty Wallet object.
     */
    public Wallet() {
    }

    /**
     * Constructs a Wallet object with the given identifier and building identifier.
     *
     * @param id         the unique identifier of the wallet
     * @param buildingId the identifier of the building associated with the wallet
     */
    public Wallet(String id, String buildingId) {
        this.id = id;
        this.buildingId = buildingId;
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

    @Override
    public String toString() {
        return "Wallet{" +
                "id='" + id + '\'' +
                ", buildingId='" + buildingId + '\'' +
                '}';
    }
}
