package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.WalletMeter;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This interface represents the meter of wallet repository, which allows us to perform CRUD operations
 * on meter of wallet entities in the database.
 */
@Repository
public interface WalletMeterRepository extends JpaRepository<WalletMeter, Integer> {

    /**
     * Creates a wallet-meter association in the database.
     *
     * @param walletId The ID of the wallet.
     * @param meterId  The ID of the meter.
     * @return The number of affected rows in the database after the creation operation.
     */
    @Transactional
    @Query(value = "CALL sp_createWalletMeter(?1, ?2)", nativeQuery = true)
    int createWalletMeter(String walletId, String meterId);

    /**
     * Retrieves wallet-meter associations from the database by wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve associations for.
     * @return An ArrayList of wallet-meter associations corresponding to the specified wallet ID.
     */
    @Query(value = "CALL sp_getWalletMeterByWalletId(?1)", nativeQuery = true)
    ArrayList<WalletMeter> getWalletMeterByWalletId(@RequestParam String walletId);
}
