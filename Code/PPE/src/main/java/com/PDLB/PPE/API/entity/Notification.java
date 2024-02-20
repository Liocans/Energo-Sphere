package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * Represents a notification object based on the database.
 *
 * <p>The Notification class encapsulates information about a notification sent to a customer or provider.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the notification.</li>
 *     <li>customerId: The unique identifier for the customer who receives the notification.</li>
 *     <li>providerId: The unique identifier for the provider who receives the notification.</li>
 *     <li>message: The content of the notification message.</li>
 *     <li>forProvider: A boolean value indicating whether the notification is for a provider or a customer.</li>
 *     <li>isAccept: A boolean value indicating whether the notification is an acceptance of a request.</li>
 *     <li>isRead: A boolean value indicating whether the notification has been read by the recipient.</li>
 * </ul>
 */
@Entity
public class Notification {

    @Id
    private int id;
    @Column(name = "date")
    private Date date;
    @Column(name = "customer_fk")
    private String customerId;
    @Column(name = "provider_fk")
    private String providerId;
    private String message;
    @Column(name = "is_new")
    private boolean isNew;
    @Column(name = "is_accept")
    private boolean isAccept;
    @Column(name = "is_read")
    private boolean isRead;

    /**
     * Constructs an empty Notification object.
     */
    public Notification() {
    }

    /**
     * Constructor for the Notification class.
     *
     * @param id          The unique identifier for the notification.
     * @param customerId  The unique identifier for the customer who receives the notification.
     * @param providerId  The unique identifier for the provider who receives the notification.
     * @param message     The content of the notification message.
     * @param isNew       A boolean value indicating whether the notification is new
     * @param isAccept    A boolean value indicating whether the notification is an acceptance of a request.
     * @param isRead      A boolean value indicating whether the notification has been read by the recipient.
     */
    public Notification(int id, String customerId, Date date, String providerId, String message, boolean isAccept, boolean isRead, boolean isNew) {
        this.id = id;
        this.date = date;
        this.customerId = customerId;
        this.providerId = providerId;
        this.message = message;
        this.isNew = isNew;
        this.isAccept = isAccept;
        this.isRead = isRead;
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

    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean aNew) {
        this.isNew = aNew;
    }

    public boolean isAccept() {
        return isAccept;
    }

    public void setAccept(boolean accept) {
        isAccept = accept;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "id=" + id +
                ", customerId='" + customerId + '\'' +
                ", providerId='" + providerId + '\'' +
                ", message='" + message + '\'' +
                ", forProvider=" + isNew +
                ", isAccept=" + isAccept +
                ", isRead=" + isRead +
                '}';
    }
}
