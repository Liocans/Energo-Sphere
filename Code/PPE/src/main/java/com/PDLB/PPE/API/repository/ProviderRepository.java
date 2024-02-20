package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the provider repository, which allows us to perform CRUD operations
 * on provider entities in the database.
 */
@Repository
public interface ProviderRepository extends JpaRepository<Provider, String> {

    /**
     * Retrieves all providers from the database.
     *
     * @return An ArrayList of all providers stored in the database.
     */
    @Query(value = "CALL sp_getAllProviders", nativeQuery = true)
    ArrayList<Provider> getAllProviders();

    /**
     * Retrieves a provider from the database by its ID.
     *
     * @param id The ID of the provider to retrieve.
     * @return The provider corresponding to the specified ID.
     */
    @Query(value = "CALL sp_getProviderById(?1)", nativeQuery = true)
    Provider getProviderById(String id);

    /**
     * Retrieves a provider from the database by its name.
     *
     * @param name The name of the provider to retrieve.
     * @return The provider corresponding to the specified name.
     */
    @Query(value = "CALL sp_getProviderByName(?1)", nativeQuery = true)
    Provider getProviderByName(String name);

    /**
     * Updates a provider entry in the database.
     *
     * @param id       The ID of the provider to update.
     * @param name     The updated name of the provider.
     * @param street   The updated street of the provider's address.
     * @param number   The updated number of the provider's address.
     * @param city     The updated city of the provider's address.
     * @param country  The updated country of the provider's address.
     * @param zipCode  The updated ZIP code of the provider's address.
     * @param language The updated language ID associated with the provider.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateProvider(?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)", nativeQuery = true)
    void updateProvider(String id, String name, String street, String number, String city, String country, int zipCode, int language);

}
