package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the customer repository, which allows us to perform CRUD operations
 * on customer entities in the database.
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

    /**
     * Creates a customer in the database.
     *
     * @param name        The name of the customer.
     * @param surname     The surname of the customer.
     * @param phoneNumber The phone number of the customer.
     * @param email       The email of the customer.
     * @param language    The language preference of the customer.
     * @param password    The password of the customer.
     * @return The ID of the newly created customer.
     */
    @Transactional
    @Query(value = "CALL sp_createCustomer(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    String createCustomer(String name, String surname, String phoneNumber, String email, int language, String password);

    /**
     * Retrieves all customers from the database.
     *
     * @return An ArrayList of Customer objects representing all customers.
     */
    @Query(value = "CALL sp_getAllCustomers", nativeQuery = true)
    ArrayList<Customer> getAllCustomers();

    /**
     * Retrieves customers from the database by their name and surname.
     *
     * @param name    The name of the customer.
     * @param surname The surname of the customer.
     * @return An ArrayList of Customer objects with the specified name and surname.
     */
    @Query(value = "CALL sp_getCustomerByNameAndSurname(?1, ?2)", nativeQuery = true)
    ArrayList<Customer> getCustomerByNameAndSurname(String name, String surname);

    /**
     * Retrieves a customer from the database by their email.
     *
     * @param email The email of the customer.
     * @return The Customer object with the specified email, or null if not found.
     */
    @Query(value = "CALL sp_getCustomerByEmail(?1)", nativeQuery = true)
    Customer getCustomerByEmail(String email);

    /**
     * Retrieves a customer from the database by their phone number.
     *
     * @param phoneNumber The phone number of the customer.
     * @return The Customer object with the specified phone number, or null if not found.
     */
    @Query(value = "CALL sp_getCustomerByPhoneNumber(?1)", nativeQuery = true)
    Customer getCustomerByPhoneNumber(String phoneNumber);

    /**
     * Retrieves a customer from the database by their ID.
     *
     * @param id The ID of the customer.
     * @return The Customer object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getCustomerById(?1)", nativeQuery = true)
    Customer getCustomerById(String id);

    /**
     * Retrieves customers from the database by the provider ID.
     *
     * @param providerId The ID of the provider.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of customers to retrieve.
     * @return An ArrayList of Customer objects associated with the specified provider.
     */
    @Query(value = "CALL sp_getCustomersByProviderId(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Customer> getCustomerByProviderId(String providerId, int offset, int limit);

    /**
     * Counts the customers associated with a specific provider.
     *
     * @param providerId The ID of the provider.
     * @return The total number of customers associated with the specified provider.
     */
    @Query(value = "CALL sp_countCustomersByProviderId(?1)", nativeQuery = true)
    int countCustomerByProviderId(String providerId);

    /**
     * Retrieves a customer from the database by the building ID.
     *
     * @param buildingId The ID of the building.
     * @return The Customer object associated with the specified building, or null if not found.
     */
    @Query(value = "CALL sp_getCustomerByBuildingId(?1)", nativeQuery = true)
    Customer getCustomerByBuildingId(String buildingId);

    /**
     * Updates the details of a customer in the database.
     *
     * @param id          The ID of the customer to update.
     * @param name        The updated name of the customer.
     * @param surname     The updated surname of the customer.
     * @param phoneNumber The updated phone number of the customer.
     * @param email       The updated email of the customer.
     * @param language    The updated language preference of the customer.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateCustomer(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    void updateCustomer(String id, String name, String surname, String phoneNumber, String email, int language);

    /**
     * Resets the password of a customer in the database.
     *
     * @param email    The email of the customer whose password is to be reset.
     * @param password The new password for the customer.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_resetCustomerPassword(?1, ?2)", nativeQuery = true)
    void resetCustomerPassword(String email, String password);

    /**
     * Deletes a customer from the database by their ID.
     *
     * @param id The ID of the customer to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteCustomerById(?1)", nativeQuery = true)
    void deleteCustomerById(String id);

}
