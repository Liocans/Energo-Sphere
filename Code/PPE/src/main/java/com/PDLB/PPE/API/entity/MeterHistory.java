package com.PDLB.PPE.API.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

/**
 * Represents a meter history object based on the database.
 *
 * <p>The MeterHistory class encapsulates information about a particular meter at a specific point in time, including its ID, the date of the reading, and the meter's value at that time.</p>
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the meter history object.</li>
 *     <li>date: The date of the meter reading.</li>
 *     <li>value: The value of the meter at the time of the reading.</li>
 *     <li>meter: The ID of the meter associated with this reading.</li>
 * </ul>
 */
@Entity
public class MeterHistory {

    @Id
    private int id;
    private LocalDate date;
    private float value;
    @Column(name = "meter_fk")
    private String meter;

    /**
     * Constructs an empty MeterHistory object.
     */
    public MeterHistory() {
    }

    /**
     * Constructor for the MeterHistory class.
     *
     * @param id    The unique identifier for the meter's historical data.
     * @param date  The date of the reading.
     * @param value The value of the reading.
     * @param meter The unique identifier for the meter the reading belongs to.
     */
    public MeterHistory(int id, LocalDate date, float value, String meter) {
        this.id = id;
        this.date = date;
        this.value = value;
        this.meter = meter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public String getMeter() {
        return meter;
    }

    public void setMeter(String meter) {
        this.meter = meter;
    }

    @Override
    public String toString() {
        return "MeterHistory{" +
                "id=" + id +
                ", date=" + date +
                ", value=" + value +
                ", meter='" + meter + '\'' +
                '}';
    }
}
