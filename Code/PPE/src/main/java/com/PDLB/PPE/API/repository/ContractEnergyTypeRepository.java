package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.ContractEnergyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the energy type of contract repository, which allows us to perform CRUD operations
 * on energy type of contract entities in the database.
 */
@Repository
public interface ContractEnergyTypeRepository extends JpaRepository<ContractEnergyType, Integer> {

    /**
     * Creates a contract energy type in the database.
     *
     * @param dayPrice      The price during the day.
     * @param nightPrice    The price during the night.
     * @param contract      The contract associated with the energy type.
     * @param energyTypeId  The ID of the energy type.
     * @return The ID of the newly created contract energy type.
     */
    @Transactional
    @Query(value = "CALL sp_createContractEnergyType(?1, ?2, ?3, ?4)", nativeQuery = true)
    int createContractEnergyType(float dayPrice, float nightPrice, String contract, int energyTypeId);

    /**
     * Retrieves all contract energy types from the database.
     *
     * @return An ArrayList of ContractEnergyType objects representing all contract energy types.
     */
    @Query(value = "CALL sp_getAllContractEnergyTypes", nativeQuery = true)
    ArrayList<ContractEnergyType> getAllContractEnergyTypes();

    /**
     * Retrieves a contract energy type from the database by its ID.
     *
     * @param id The ID of the contract energy type to retrieve.
     * @return The ContractEnergyType object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getContractEnergyTypeById(?1)", nativeQuery = true)
    ContractEnergyType getContractEnergyTypeById(int id);

    /**
     * Retrieves contract energy types associated with a specific contract from the database.
     *
     * @param contractId The ID of the contract.
     * @return An ArrayList of ContractEnergyType objects associated with the specified contract.
     */
    @Query(value = "CALL sp_getContractEnergyTypeByContractId(?1)", nativeQuery = true)
    ArrayList<ContractEnergyType> getContractEnergyTypeByContractId(String contractId);

    /**
     * Updates the details of a contract energy type in the database.
     *
     * @param id          The ID of the contract energy type to update.
     * @param dayPrice    The updated price during the day.
     * @param nightPrice  The updated price during the night.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateContractEnergyType(?1, ?2, ?3)", nativeQuery = true)
    void updateContractEnergyType(int id, float dayPrice, float nightPrice);

    /**
     * Deletes a contract energy type from the database by its ID.
     *
     * @param id The ID of the contract energy type to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteContractEnergyTypeById(?1)", nativeQuery = true)
    void deleteContractEnergyTypeById(int id);
}
