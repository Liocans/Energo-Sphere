package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Notification;
import com.PDLB.PPE.DTO.model.NotificationDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The NotificationMapper class provides mapping methods between Notification and NotificationDto objects.
 */
@Component
public class NotificationMapper {

    /**
     * Maps a Notification object to a NotificationDto object.
     *
     * @param notification the Notification object to be mapped
     * @return the corresponding NotificationDto object
     */
    public NotificationDto toDto(Notification notification, String customerName, String providerName) {
        if (notification == null)
            return null;

        return new NotificationDto(notification.getId(),
                notification.getCustomerId(),
                notification.getDate(),
                notification.getProviderId(),
                notification.getMessage(),
                notification.isAccept(),
                notification.isRead(),
                notification.isNew(),
                customerName,
                providerName);
    }
}
