package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This interface represents the notification repository, which allows us to perform CRUD operations
 * on notification entities in the database.
 */
@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {

    /**
     * Creates a notification entry in the database.
     *
     * @param customerId The ID of the customer receiving the notification.
     * @param providerId The ID of the provider associated with the notification.
     * @param message    The message content of the notification.
     * @param isAccept   A boolean indicating if the notification is an acceptance notification.
     * @param isRead     A boolean indicating if the notification has been read.
     * @param isNew      A boolean indicating if the notification is new.
     * @return The ID of the newly created notification entry.
     */
    @Transactional
    @Query(value = "CALL sp_createNotification(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    int createNotification(String customerId, String providerId, String message, boolean isAccept, boolean isRead, boolean isNew);

    /**
     * Retrieves notifications for a customer from the database with pagination.
     *
     * @param customerId The ID of the customer.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of notifications to retrieve.
     * @return An ArrayList of Notification objects associated with the specified customer, paginated.
     */
    @Query(value = "CALL sp_getNotificationsByCustomerId(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Notification> getNotificationsByCustomerId(String customerId, int offset, int limit);

    /**
     * Retrieves specific notifications for a customer from the database with pagination and filtering.
     *
     * @param customerId The ID of the customer.
     * @param isAccept   A boolean indicating if the notification is an acceptance notification.
     * @param isRead     A boolean indicating if the notification has been read.
     * @param isNew      A boolean indicating if the notification is new.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of notifications to retrieve.
     * @return An ArrayList of Notification objects associated with the specified customer, filtered and paginated.
     */
    @Query(value = "CALL sp_getSpecificNotificationsByCustomerId(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    ArrayList<Notification> getSpecificNotificationsByCustomerId(String customerId, boolean isAccept, boolean isRead, boolean isNew, int offset, int limit);

    /**
     * Counts the number of new notifications for a customer.
     *
     * @param customerId The ID of the customer.
     * @return The total number of new notifications associated with the specified customer.
     */
    @Query(value = "CALL sp_getNumberOfNewNotificationsByCustomerId(?1)", nativeQuery = true)
    int getNumberOfNewNotificationsByCustomerId(String customerId);

    /**
     * Counts the number of notifications for a customer.
     *
     * @param customerId The ID of the customer.
     * @return The total number of notifications associated with the specified customer.
     */
    @Query(value = "CALL sp_countNotificationsByCustomerId(?1)", nativeQuery = true)
    int countNotificationsByCustomerId(@RequestParam String customerId);

    /**
     * Retrieves notifications for a provider from the database with pagination.
     *
     * @param providerId The ID of the provider.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of notifications to retrieve.
     * @return An ArrayList of Notification objects associated with the specified provider, paginated.
     */
    @Query(value = "CALL sp_getNotificationsByProviderId(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Notification> getNotificationsByProviderId(String providerId, int offset, int limit);

    /**
     * Retrieves specific notifications for a provider from the database with pagination and filtering.
     *
     * @param providerId The ID of the provider.
     * @param isAccept   A boolean indicating if the notification is an acceptance notification.
     * @param isRead     A boolean indicating if the notification has been read.
     * @param isNew      A boolean indicating if the notification is new.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of notifications to retrieve.
     * @return An ArrayList of Notification objects associated with the specified provider, filtered and paginated.
     */
    @Query(value = "CALL sp_getSpecificNotificationsByProviderId(?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    ArrayList<Notification> getSpecificNotificationsByProviderId(String providerId, boolean isAccept, boolean isRead, boolean isNew, int offset, int limit);


    /**
     * Counts the number of notifications for a provider.
     *
     * @param providerId The ID of the provider.
     * @return The total number of notifications associated with the specified provider.
     */
    @Query(value = "CALL sp_countNotificationsByProviderId(?1)", nativeQuery = true)
    int countNotificationsByProviderId(String providerId);

    /**
     * Retrieves the number of new notifications for a provider.
     *
     * @param providerId The ID of the provider.
     * @return The total number of new notifications associated with the specified provider.
     */
    @Query(value = "CALL sp_getNumberOfNewNotificationsByProviderId(?1)", nativeQuery = true)
    int getNumberOfNewNotificationsByProviderId(String providerId);

    /**
     * Updates a notification entry in the database.
     *
     * @param id           The ID of the notification to update.
     * @param customerId   The ID of the customer associated with the notification.
     * @param providerId   The ID of the provider associated with the notification.
     * @param message      The updated message content of the notification.
     * @param isForProvider A boolean indicating if the notification is for the provider.
     * @param isAccept     A boolean indicating if the notification is an acceptance notification.
     * @param isRead       A boolean indicating if the notification has been read.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateNotification(?1, ?2, ?3, ?4, ?5, ?6, ?7)", nativeQuery = true)
    void updateNotification(int id, String customerId, String providerId, String message, boolean isForProvider, boolean isAccept, boolean isRead);

    /**
     * Deletes a notification entry from the database.
     *
     * @param id The ID of the notification to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteNotification(?1)", nativeQuery = true)
    void deleteNotification(int id);

    /**
     * Counts specific notifications for a provider.
     *
     * @param providerId The ID of the provider.
     * @param isAccept   A boolean indicating if the notification is an acceptance notification.
     * @param isRead     A boolean indicating if the notification has been read.
     * @param isNew      A boolean indicating if the notification is new.
     * @return The total number of specific notifications associated with the specified provider.
     */
    @Query(value = "CALL sp_countSpecificNotificationsByProviderId(?1, ?2, ?3, ?4)", nativeQuery = true)
    int countSpecificNotificationsByProviderId(String providerId, boolean isAccept, boolean isRead, boolean isNew);


    /**
     * Counts specific notifications for a customer.
     *
     * @param customerId The ID of the customer.
     * @param isAccept   A boolean indicating if the notification is an acceptance notification.
     * @param isRead     A boolean indicating if the notification has been read.
     * @param isNew      A boolean indicating if the notification is new.
     * @return The total number of specific notifications associated with the specified customer.
     */
    @Query(value = "CALL sp_countSpecificNotificationsByCustomerId(?1, ?2, ?3, ?4)", nativeQuery = true)
    int countSpecificNotificationsByCustomerId(String customerId, boolean isAccept, boolean isRead, boolean isNew);
}
