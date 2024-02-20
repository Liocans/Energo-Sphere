package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the privilege repository, which allows us to perform CRUD operations
 * on privilege entities in the database.
 */

@Repository
public interface PrivilegeRepository extends JpaRepository<Privilege, Integer> {

    /**
     * Retrieves all privileges from the database.
     *
     * @return An ArrayList of all privileges stored in the database.
     */
    @Query(value = "CALL sp_getAllPrivileges", nativeQuery = true)
    ArrayList<Privilege> getAllPrivileges();

    /**
     * Retrieves a privilege from the database by its ID.
     *
     * @param id The ID of the privilege to retrieve.
     * @return The privilege corresponding to the specified ID.
     */
    @Query(value = "CALL sp_getPrivilegeById(?1)", nativeQuery = true)
    Privilege getPrivilegeById(int id);

    /**
     * Retrieves a privilege from the database by customer ID and wallet ID.
     *
     * @param customerId The ID of the customer associated with the privilege.
     * @param walletId   The ID of the wallet associated with the privilege.
     * @return The privilege associated with the specified customer ID and wallet ID.
     */
    @Query(value = "CALL sp_getPrivilegeByCustomerIdAndWalletId(?1, ?2)", nativeQuery = true)
    Privilege getPrivilegeByCustomerIdAndWalletId(String customerId, String walletId);
}
