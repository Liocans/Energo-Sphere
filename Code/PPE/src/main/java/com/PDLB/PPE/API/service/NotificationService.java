package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.entity.Meter;
import com.PDLB.PPE.API.entity.Notification;
import com.PDLB.PPE.API.repository.NotificationRepository;
import com.PDLB.PPE.DTO.mapper.NotificationMapper;
import com.PDLB.PPE.DTO.model.MeterDto;
import com.PDLB.PPE.DTO.model.NotificationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This service class provides methods for managing notifications and their associated data.
 */
@Service
public class NotificationService {

    @Autowired
    private NotificationMapper notificationMapper;
    @Autowired
    private ProviderService providerService;
    @Autowired CustomerService customerService;
    @Autowired
    private NotificationRepository notificationRepository;

    /**
     * Creates a new notification.
     *
     * @param notificationDto The NotificationDto object representing the notification to create.
     * @return The id of the notification.
     */
    public int createNotification(NotificationDto notificationDto) {
        return notificationRepository.createNotification(notificationDto.getCustomerId(), notificationDto.getProviderId(), notificationDto.getMessage(), notificationDto.isAccept(), notificationDto.isRead(), notificationDto.isNew());
    }

    /**
     * Retrieves all notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    public ArrayList<NotificationDto> getNotificationsByCustomerId(String customerId, int offset, int limit) {
        return objectsCreator(notificationRepository.getNotificationsByCustomerId(customerId, offset, limit));
    }

    /**
     * Retrieves specific notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @param isAccept   Is that message is accept
     * @param isRead     Is that message is read
     * @param isNew      Is that a new message pour the customer
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    public ArrayList<NotificationDto> getSpecificNotificationsByCustomerId(String customerId, boolean isAccept, boolean isRead, boolean isNew, int offset, int limit){
        return objectsCreator(notificationRepository.getSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew, offset, limit));
    }

    /**
     * Retrieves the count of specific notifications for a given customer based on various criteria.
     *
     * @param customerId The ID of the customer for whom notifications are counted.
     * @param isAccept   Boolean indicating whether notifications are accepted.
     * @param isRead     Boolean indicating whether notifications are read.
     * @param isNew      Boolean indicating whether notifications are new.
     * @return The count of notifications meeting the specified criteria for the given customer.
     */
    public int countSpecificNotificationsByCustomerId(String customerId, boolean isAccept, boolean isRead, boolean isNew) {
        return notificationRepository.countSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew);
    }

    /**
     * Retrieves the number of notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @return The number of notifications for a given customer
     */
    public int countNotificationsByCustomerId(@RequestParam String customerId){
        return notificationRepository.countNotificationsByCustomerId(customerId);
    }

    /**
     * Retrieves the count of specific notifications for a given provider based on various criteria.
     *
     * @param providerId The ID of the provider for whom notifications are counted.
     * @param isAccept   Boolean indicating whether notifications are accepted.
     * @param isRead     Boolean indicating whether notifications are read.
     * @param isNew      Boolean indicating whether notifications are new.
     * @return The count of notifications meeting the specified criteria for the given provider.
     */
    public int countSpecificNotificationsByProviderId(String providerId, boolean isAccept, boolean isRead, boolean isNew) {
        return notificationRepository.countSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew);
    }

    /**
     * Retrieves all unread notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve unread notifications for.
     * @return An ArrayList of NotificationDto objects representing the unread notifications.
     */
    public int getNumberOfNewNotificationsByCustomerId(String customerId) {
        return notificationRepository.getNumberOfNewNotificationsByCustomerId(customerId);

    }

    /**
     * Retrieves all notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    public ArrayList<NotificationDto> getNotificationsByProviderId(String providerId, int offset, int limit) {
        return objectsCreator(notificationRepository.getNotificationsByProviderId(providerId, offset, limit));

    }

    /**
     * Retrieves specific notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @param isAccept   Is that message is accept
     * @param isRead     Is that message is read
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    public ArrayList<NotificationDto> getSpecificNotificationsByProviderId(String providerId, boolean isAccept, boolean isRead, boolean isNew, int offset, int limit){
        return objectsCreator(notificationRepository.getSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew,offset, limit));
    }

    /**
     * Retrieves the number of notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @return The number of notifications for a given provider
     */
    public int countNotificationsByProviderId(@RequestParam String providerId){
        return notificationRepository.countNotificationsByProviderId(providerId);
    }

    /**
     * Retrieves all unread notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve unread notifications for.
     * @return An ArrayList of NotificationDto objects representing the unread notifications.
     */
    public int getNumberOfNewNotificationsByProviderId(String providerId) {
        return notificationRepository.getNumberOfNewNotificationsByProviderId(providerId);

    }

    /**
     * Updates an existing notification.
     *
     * @param notificationDto The NotificationDto object representing the notification to update.
     */
    public void updateNotification(NotificationDto notificationDto) {
        notificationRepository.updateNotification(notificationDto.getId(), notificationDto.getCustomerId(), notificationDto.getProviderId(), notificationDto.getMessage(), notificationDto.isAccept(), notificationDto.isRead(), notificationDto.isNew());
    }

    /**
     * Deletes an existing notification by its ID.
     *
     * @param id The notification id
     */
    public void deleteNotification(int id) {
        notificationRepository.deleteNotification(id);
    }

    /**
     * Creates a list of NotificationDto objects based on the provided list of notifications.
     *
     * @param notifications The list of notifications to be converted to NotificationDto objects.
     * @return An ArrayList containing NotificationDto objects corresponding to the input notifications.
     */
    private ArrayList<NotificationDto> objectsCreator(ArrayList<Notification> notifications) {
        ArrayList<NotificationDto> objects = new ArrayList<>();
        for (Notification notification : notifications) {
            objects.add(objectCreator(notification));
        }
        return objects;
    }

    /**
     * Creates a NotificationDto object from the given Notification object and additional related data.
     *
     * @param notification The Notification object to be converted into a NotificationDto.
     * @return A NotificationDto object representing the input notification with additional related data.
     */
    private NotificationDto objectCreator(Notification notification) {
        return notificationMapper.toDto(
            notification,
            customerService.getCustomerById(notification.getCustomerId()).getFullName(),
            providerService.getProviderById(notification.getProviderId()).getName()
        );
    }
}
