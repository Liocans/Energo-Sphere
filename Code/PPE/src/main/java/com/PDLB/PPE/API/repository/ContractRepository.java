package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * This interface represents the contract repository, which allows us to perform CRUD operations
 * on contract entities in the database.
 */
@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

    /**
     * Creates a contract in the database.
     *
     * @param startDate    The start date of the contract.
     * @param endDate      The end date of the contract.
     * @param provider     The provider of the contract.
     * @param contractType The type of contract.
     * @param building     The building associated with the contract.
     * @return The ID of the newly created contract.
     */
    @Transactional
    @Query(value = "CALL sp_createContract(?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    String createContract(LocalDate startDate, LocalDate endDate, String provider, int contractType, String building);

    /**
     * Retrieves all contracts from the database.
     *
     * @return An ArrayList of Contract objects representing all contracts.
     */
    @Query(value = "CALL sp_getAllContracts", nativeQuery = true)
    ArrayList<Contract> getAllContracts();

    /**
     * Retrieves a contract from the database by its ID.
     *
     * @param id The ID of the contract to retrieve.
     * @return The Contract object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getContractById(?1)", nativeQuery = true)
    Contract getContractById(String id);

    /**
     * Retrieves contracts associated with a specific provider from the database.
     *
     * @param provider The provider of the contracts.
     * @param offset   The offset for pagination.
     * @param limit    The maximum number of contracts to retrieve.
     * @return An ArrayList of Contract objects associated with the specified provider.
     */
    @Query(value = "CALL sp_getContractByProvider(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Contract> getContractByProviderId(String provider, int offset, int limit);

    /**
     * Counts the contracts associated with a specific provider.
     *
     * @param provider The provider of the contracts.
     * @return The total number of contracts associated with the specified provider.
     */
    @Query(value = "CALL sp_countContractByProvider(?1)", nativeQuery = true)
    int countContractByProviderId(String provider);

    /**
     * Retrieves contracts associated with a specific customer from the database.
     *
     * @param building The building associated with the contracts.
     * @param offset   The offset for pagination.
     * @param limit    The maximum number of contracts to retrieve.
     * @return An ArrayList of Contract objects associated with the specified customer.
     */
    @Query(value = "CALL sp_getContractByCustomer(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Contract> getContractByCustomerId(String building, int offset, int limit);

    /**
     * Counts the contracts associated with a specific customer.
     *
     * @param id The ID of the customer.
     * @return The total number of contracts associated with the specified customer.
     */
    @Query(value = "CALL sp_countContractByCustomer(?1)", nativeQuery = true)
    int countContractByCustomerId(String id);

    /**
     * Updates the details of a contract in the database.
     *
     * @param id           The ID of the contract to update.
     * @param startDate    The updated start date of the contract.
     * @param endDate      The updated end date of the contract.
     * @param provider     The updated provider of the contract.
     * @param contractType The updated type of contract.
     * @param building     The updated building associated with the contract.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateContract(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    void updateContract(String id, LocalDate startDate, LocalDate endDate, String provider, int contractType, String building);

    /**
     * Deletes a contract from the database by its ID.
     *
     * @param id The ID of the contract to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteContractById(?1)", nativeQuery = true)
    void deleteContractById(String id);

}
