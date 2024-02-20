package com.PDLB.PPE.DTO.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * A data transfer object (DTO) representing a notification.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the notification.</li>
 *     <li>customerId: The unique identifier for the customer associated with the notification.</li>
 *     <li>providerId: The unique identifier for the provider associated with the notification.</li>
 *     <li>message: The message contained in the notification.</li>
 *     <li>forProvider: A flag indicating whether the notification is intended for the provider or not.</li>
 *     <li>isAccept: A flag indicating whether the notification is an acceptance or not.</li>
 *     <li>isRead: A flag indicating whether the notification has been read or not.</li>
 *     <li>IsNew: A flag indicating whether the notification has been new or not.</li>
 * </ul>
 */
public class NotificationDto {
    private int id;
    private String customerId;
    private Date date;
    private String providerId;
    private String customerName;
    private String providerName;
    private String message;
    @JsonProperty("new")
    private boolean IsNew;
    @JsonProperty("accept")
    private boolean IsAccept;
    @JsonProperty("read")
    private boolean IsRead;

    /**
     * Constructs an empty NotificationDto object.
     */
    public NotificationDto() {
    }

    /**
     * Constructor for the NotificationDto class.
     *
     * @param id          The unique identifier for the notification.
     * @param customerId  The unique identifier for the customer associated with the notification.
     * @param providerId  The unique identifier for the provider associated with the notification.
     * @param message     The message contained in the notification.
     * @param isNew       A flag indicating whether the notification is a new one
     * @param isAccept    A flag indicating whether the notification is an acceptance or not.
     * @param isRead      A flag indicating whether the notification has been read or not.
     */
    public NotificationDto(int id, String customerId, String providerId, String message, boolean isAccept, boolean isRead, boolean isNew) {
        this(id, customerId, providerId, message, isNew, isAccept, isRead, null, null);
    }

    /**
     * Constructor for the NotificationDto class.
     *
     * @param id          The unique identifier for the notification.
     * @param customerId  The unique identifier for the customer associated with the notification.
     * @param providerId  The unique identifier for the provider associated with the notification.
     * @param customerName  The full name for the customer associated with the notification.
     * @param providerName  The name for the provider associated with the notification.
     * @param message     The message contained in the notification.
     * @param isNew       A flag indicating whether the notification is a new one
     * @param isAccept    A flag indicating whether the notification is an acceptance or not.
     * @param isRead      A flag indicating whether the notification has been read or not.
     */
    public NotificationDto(int id, String customerId, String providerId, String message, boolean isAccept, boolean isRead, boolean isNew, String customerName, String providerName) {
        this(id, customerId, null, providerId, message, isAccept, isRead, isNew, customerName, providerName);
    }

    /**
     * Constructor for the NotificationDto class.
     *
     * @param id          The unique identifier for the notification.
     * @param customerId  The unique identifier for the customer associated with the notification.
     * @param date        The date of the notification
     * @param providerId  The unique identifier for the provider associated with the notification.
     * @param customerName  The full name for the customer associated with the notification.
     * @param providerName  The name for the provider associated with the notification.
     * @param message     The message contained in the notification.
     * @param isNew       A flag indicating whether the notification is a new one
     * @param isAccept    A flag indicating whether the notification is an acceptance or not.
     * @param isRead      A flag indicating whether the notification has been read or not.
     */
    public NotificationDto(int id, String customerId, Date date, String providerId, String message, boolean isAccept, boolean isRead, boolean isNew, String customerName, String providerName) {
        this.id = id;
        this.date = date;
        this.customerId = customerId;
        this.providerId = providerId;
        this.message = message;
        this.IsNew = isNew;
        this.IsAccept = isAccept;
        this.IsRead = isRead;
        this.customerName = customerName;
        this.providerName = providerName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public boolean isNew() {
        return IsNew;
    }

    public void setisNew(boolean forProvider) {
        this.IsNew = forProvider;
    }

    public boolean isAccept() {
        return IsAccept;
    }

    public void setAccept(boolean accept) {
        IsAccept = accept;
    }

    public boolean isRead() {
        return IsRead;
    }

    public void setRead(boolean read) {
        IsRead = read;
    }

    @Override
    public String toString() {
        return "NotificationDto{" +
                "id=" + id +
                ", customerId='" + customerId + '\'' +
                ", date=" + date +
                ", providerId='" + providerId + '\'' +
                ", customerName='" + customerName + '\'' +
                ", providerName='" + providerName + '\'' +
                ", message='" + message + '\'' +
                ", isNew=" + IsNew +
                ", isAccept=" + IsAccept +
                ", isRead=" + IsRead +
                '}';
    }
}
