package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.ContractType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the type of contract repository, which allows us to perform CRUD operations
 * on type of contract entities in the database.
 */
@Repository
public interface ContractTypeRepository extends JpaRepository<ContractType, Integer> {

    /**
     * Retrieves all contract types from the database.
     *
     * @return An ArrayList of ContractType objects representing all contract types.
     */
    @Query(value = "CALL sp_getAllContractTypes", nativeQuery = true)
    ArrayList<ContractType> getAllContractTypes();

    /**
     * Retrieves a contract type from the database by its ID.
     *
     * @param id The ID of the contract type to retrieve.
     * @return The ContractType object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getContractTypeById(?1)", nativeQuery = true)
    ContractType getContractTypeById(int id);

}
