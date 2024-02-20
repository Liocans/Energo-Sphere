package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.NotificationService;
import com.PDLB.PPE.DTO.model.NotificationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to notifications.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    /**
     * Endpoint that creates a new notification.
     *
     * @param notificationDto The NotificationDto object representing the notification to create.
     * @return The id of the notification.
     */
    @PostMapping("/createNotification")
    @ResponseStatus(HttpStatus.CREATED)
    public int createNotification(@RequestBody NotificationDto notificationDto) {
        return notificationService.createNotification(notificationDto);
    }

    /**
     * Endpoint that retrieves all notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    @GetMapping("/getNotificationsByCustomerId")
    public ArrayList<NotificationDto> getNotificationsByCustomerId(@RequestParam String customerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return notificationService.getNotificationsByCustomerId(customerId, offset, limit);
    }

    /**
     * Endpoint that retrieves specific notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @param isAccept   Is that message is accept
     * @param isRead     Is that message is read
     * @param isNew      Is that a new message pour the customer
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    @GetMapping("/getSpecificNotificationsByCustomerId")
    public ArrayList<NotificationDto> getSpecificNotificationsByCustomerId(@RequestParam String customerId, @RequestParam boolean isAccept, @RequestParam boolean isRead, @RequestParam boolean isNew, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit){
        return notificationService.getSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew, offset, limit);
    }

    /**
     * Endpoint retrieves the count of specific notifications for a given customer based on various criteria.
     *
     * @param customerId The ID of the customer for whom notifications are counted.
     * @param isAccept   Boolean indicating whether notifications are accepted.
     * @param isRead     Boolean indicating whether notifications are read.
     * @param isNew      Boolean indicating whether notifications are new.
     * @return The count of notifications meeting the specified criteria for the given customer.
     */
    @GetMapping("/countSpecificNotificationsByCustomerId")
    public int countSpecificNotificationsByCustomerId(@RequestParam String customerId, @RequestParam boolean isAccept, @RequestParam boolean isRead, @RequestParam boolean isNew){
        return notificationService.countSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew);
    }

    /**
     * Endpoint that retrieves the number of notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve notifications for.
     * @return The number of notifications for a given customer
     */
    @GetMapping("/countNotificationsByCustomerId")
    public int countNotificationsByCustomerId(@RequestParam String customerId){
        return notificationService.countNotificationsByCustomerId(customerId);
    }

    /**
     * Endpoint retrieves the count of specific notifications for a given provider based on various criteria.
     *
     * @param providerId The ID of the provider for whom notifications are counted.
     * @param isAccept   Boolean indicating whether notifications are accepted.
     * @param isRead     Boolean indicating whether notifications are read.
     * @param isNew      Boolean indicating whether notifications are new.
     * @return The count of notifications meeting the specified criteria for the given provider.
     */
    @GetMapping("/countSpecificNotificationsByProviderId")
    public int countSpecificNotificationsByProviderId(@RequestParam String providerId, @RequestParam boolean isAccept, @RequestParam boolean isRead, @RequestParam boolean isNew){
        return notificationService.countSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew);
    }

    /**
     * Endpoint that retrieves all unread notifications for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve unread notifications for.
     * @return An ArrayList of NotificationDto objects representing the unread notifications.
     */
    @GetMapping("/getNumberOfNewNotificationsByCustomerId")
    public int getNumberOfNewNotificationsByCustomerId(@RequestParam String customerId) {
        return notificationService.getNumberOfNewNotificationsByCustomerId(customerId);
    }

    /**
     * Endpoint that retrieves all notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    @GetMapping("/getNotificationsByProviderId")
    public ArrayList<NotificationDto> getNotificationsByProviderId(@RequestParam String providerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return notificationService.getNotificationsByProviderId(providerId, offset, limit);
    }

    /**
     * Endpoint that retrieves specific notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @param isAccept   Is that message is accept
     * @param isRead     Is that message is read
     * @param offset     The record number where pagination is done
     * @param limit      The number of objects to return.
     * @return An ArrayList of NotificationDto objects representing the notifications.
     */
    @GetMapping("/getSpecificNotificationsByProviderId")
    public ArrayList<NotificationDto> getSpecificNotificationsByProviderId(@RequestParam String providerId, @RequestParam boolean isAccept, @RequestParam boolean isRead, @RequestParam boolean isNew, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit){
        return notificationService.getSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew, offset, limit);
    }

    /**
     * Endpoint that retrieves the number of notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve notifications for.
     * @return The number of notifications for a given provider
     */
    @GetMapping("/countNotificationsByProviderId")
    public int countNotificationsByProviderId(@RequestParam String providerId){
        return notificationService.countNotificationsByProviderId(providerId);
    }

    /**
     * Endpoint that retrieves all unread notifications for a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve unread notifications for.
     * @return An ArrayList of NotificationDto objects representing the unread notifications.
     */
    @GetMapping("/getNumberOfNewNotificationsByProviderId")
    public int getNumberOfNewNotificationsByProviderId(@RequestParam String providerId) {
        return notificationService.getNumberOfNewNotificationsByProviderId(providerId);
    }

    /**
     * Endpoint that updates an existing notification.
     *
     * @param notificationDto The NotificationDto object representing the notification to update.
     */
    @PutMapping("/updateNotification")
    public void updateNotification(@RequestBody NotificationDto notificationDto) {
        notificationService.updateNotification(notificationDto);
    }

    /**
     * Endpoint that deletes an existing notification by its ID.
     *
     * @param id The notification id
     */
    @DeleteMapping("/deleteNotificationById")
    public void deleteNotificationById(@RequestParam int id) {
        notificationService.deleteNotification(id);
    }
}
