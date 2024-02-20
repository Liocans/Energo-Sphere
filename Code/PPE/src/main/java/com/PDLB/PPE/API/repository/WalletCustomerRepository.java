package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.WalletCustomer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the customer of wallet repository, which allows us to perform CRUD operations
 * on customer of wallet entities in the database.
 */
@Repository
public interface WalletCustomerRepository extends JpaRepository<WalletCustomer, Integer> {

    /**
     * Creates a wallet-customer association in the database.
     *
     * @param walletId   The ID of the wallet.
     * @param customerId The ID of the customer.
     * @param privilege  The ID of the privilege associated with the wallet-customer association.
     * @return The number of affected rows in the database after the creation operation.
     */
    @Transactional
    @Query(value = "CALL sp_createWalletCustomer(?1, ?2, ?3)", nativeQuery = true)
    int createWalletCustomer(String walletId, String customerId, int privilege);

    /**
     * Retrieves wallet-customer associations from the database by wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve associations for.
     * @return An ArrayList of wallet-customer associations corresponding to the specified wallet ID.
     */
    @Query(value = "CALL sp_getWalletCustomerByWalletId(?1)", nativeQuery = true)
    ArrayList<WalletCustomer> getWalletCustomerByWalletId(String walletId);
}
