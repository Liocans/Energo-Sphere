package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the wallet repository, which allows us to perform CRUD operations
 * on wallet entities in the database.
 */
@Repository
public interface WalletRepository extends JpaRepository<Wallet, String> {

    /**
     * Creates a wallet associated with a building in the database.
     *
     * @param buildingId The ID of the building associated with the wallet.
     * @return The ID of the created wallet.
     */
    @Transactional
    @Query(value = "CALL sp_createWallet(?1)", nativeQuery = true)
    String createWallet(String buildingId);

    /**
     * Retrieves all wallets from the database.
     *
     * @return An ArrayList of all wallets in the database.
     */
    @Query(value = "CALL sp_getAllWallets", nativeQuery = true)
    ArrayList<Wallet> getAllWallets();

    /**
     * Retrieves a wallet from the database by its ID.
     *
     * @param id The ID of the wallet to retrieve.
     * @return The wallet corresponding to the specified ID.
     */
    @Query(value = "CALL sp_getWalletById(?1)", nativeQuery = true)
    Wallet getWalletById(String id);

    /**
     * Retrieves wallets associated with a customer from the database.
     *
     * @param customerId The ID of the customer.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of records to retrieve.
     * @return An ArrayList of wallets associated with the specified customer.
     */
    @Query(value = "CALL sp_getWalletByCustomerId(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Wallet> getWalletByCustomerId(String customerId, int offset, int limit);

    /**
     * Counts the number of wallets associated with a customer in the database.
     *
     * @param customerId The ID of the customer.
     * @return The number of wallets associated with the specified customer.
     */
    @Query(value = "CALL sp_countWalletByCustomerId(?1)", nativeQuery = true)
    int countWalletByCustomerId(String customerId);
}
