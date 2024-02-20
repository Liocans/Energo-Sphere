package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Meter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the meter repository, which allows us to perform CRUD operations
 * on meter entities in the database.
 */
@Repository
public interface MeterRepository extends JpaRepository<Meter, String> {

    /**
     * Creates a new meter entry in the database.
     *
     * @param isNumeric   A boolean indicating if the meter value is numeric.
     * @param value       The initial value of the meter.
     * @param buildingId  The ID of the building associated with the meter.
     * @param energyTypeId The ID of the energy type associated with the meter.
     * @param isOpen      A boolean indicating if the meter is open.
     * @return The ID of the newly created meter.
     */
    @Transactional
    @Query(value = "CALL sp_createMeter(?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    String createMeter(boolean isNumeric, float value, String buildingId, int energyTypeId, boolean isOpen);

    /**
     * Retrieves all meters from the database.
     *
     * @return An ArrayList of Meter objects representing all meters.
     */
    @Query(value = "CALL sp_getAllMeters", nativeQuery = true)
    ArrayList<Meter> getAllMeters();

    /**
     * Retrieves meters from the database by the building ID.
     *
     * @param buildingId The ID of the building.
     * @return An ArrayList of Meter objects associated with the specified building.
     */
    @Query(value = "CALL sp_getMetersByBuildingId(?1)", nativeQuery = true)
    ArrayList<Meter> getMetersByBuildingId(String buildingId);

    /**
     * Retrieves meters from the database by the wallet ID.
     *
     * @param walletId The ID of the wallet.
     * @return An ArrayList of Meter objects associated with the specified wallet.
     */
    @Query(value = "CALL sp_getMetersByWalletId(?1)", nativeQuery = true)
    ArrayList<Meter> getMetersByWalletId(String walletId);

    /**
     * Updates the details of a meter in the database.
     *
     * @param id        The ID of the meter to update.
     * @param isNumeric A boolean indicating if the meter value is numeric.
     * @param value     The updated value of the meter.
     * @param isOpen    A boolean indicating if the meter is open.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateMeter(?1, ?2, ?3, ?4)", nativeQuery = true)
    void updateMeter(String id, boolean isNumeric, float value, boolean isOpen);

    /**
     * Deletes a meter from the database by its ID.
     *
     * @param id The ID of the meter to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteMeterById(?1)", nativeQuery = true)
    void deleteMeterById(String id);
}
