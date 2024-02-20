package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.EnergyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the type of energy repository, which allows us to perform CRUD operations
 * on type of energy entities in the database.
 */
@Repository
public interface EnergyTypeRepository extends JpaRepository<EnergyType, Integer> {

    /**
     * Retrieves all energy types from the database.
     *
     * @return An ArrayList of EnergyType objects representing all energy types.
     */
    @Query(value = "CALL sp_getAllEnergyTypes", nativeQuery = true)
    ArrayList<EnergyType> getAllEnergyTypes();

    /**
     * Retrieves an energy type from the database by its ID.
     *
     * @param id The ID of the energy type to retrieve.
     * @return The EnergyType object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getEnergyTypeById(?1)", nativeQuery = true)
    EnergyType getEnergyTypeById(int id);

    /**
     * Retrieves energy types from the database by the provider ID.
     *
     * @param providerId The ID of the provider.
     * @return An ArrayList of EnergyType objects associated with the specified provider.
     */
    @Query(value = "CALL sp_getEnergyTypeByProviderId(?1)", nativeQuery = true)
    ArrayList<EnergyType> getEnergyTypeByProviderId(String providerId);
}
