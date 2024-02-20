package com.PDLB.PPE.DTO.model;

import java.time.LocalDate;

/**
 * A data transfer object (DTO) representing a meterHistory.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the meter history entry.</li>
 *     <li>date: The date of the meter history entry.</li>
 *     <li>value: The value recorded in the meter history entry.</li>
 * </ul>
 */
public class MeterHistoryDto {

    private int id;
    private LocalDate date;
    private float value;

    /**
     * Constructs an empty MeterHistoryDto object.
     */
    public MeterHistoryDto() {
    }

    /**
     * Constructs a MeterHistoryDto object with the specified values.
     *
     * @param id    The unique identifier for the meter history entry.
     * @param date  The date of the meter history entry.
     * @param value The value recorded in the meter history entry.
     */
    public MeterHistoryDto(int id, LocalDate date, float value) {
        this.id = id;
        this.date = date;
        this.value = value;
    }

    /**
     * Constructs a MeterHistoryDto object with the specified values and an ID of 0.
     *
     * @param date  The date of the meter history entry.
     * @param value The value recorded in the meter history entry.
     */
    public MeterHistoryDto(LocalDate date, int value) {
        this(0, date, value);
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

    @Override
    public String toString() {
        return "MeterHistoryDto{" +
                "id=" + id +
                ", date=" + date +
                ", value=" + value +
                '}';
    }
}
