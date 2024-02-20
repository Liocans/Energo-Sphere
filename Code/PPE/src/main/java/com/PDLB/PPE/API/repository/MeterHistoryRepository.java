package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.MeterHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * This interface represents the histories of meter repository, which allows us to perform CRUD operations
 * on histories of meter entities in the database.
 */
@Repository
public interface MeterHistoryRepository extends JpaRepository<MeterHistory, Integer> {

    /**
     * Creates a meter history entry in the database.
     *
     * @param date    The date of the meter reading.
     * @param value   The value of the meter reading.
     * @param meterId The ID of the meter associated with the reading.
     * @return The ID of the newly created meter history entry.
     */
    @Transactional
    @Query(value = "CALL sp_createMeterHistory(?1, ?2, ?3)", nativeQuery = true)
    int createMeterHistory(LocalDate date, float value, String meterId);

    /**
     * Retrieves meter history entries from the database by meter ID with pagination and sorting.
     *
     * @param meterId    The ID of the meter.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of entries to retrieve.
     * @param columnName The name of the column for sorting.
     * @param order      The sorting order (ASC or DESC).
     * @return An ArrayList of MeterHistory objects associated with the specified meter ID, paginated and sorted.
     */
    @Query(value = "CALL sp_getMeterHistoryByMeterId(?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    ArrayList<MeterHistory> getMeterHistoryByMeterId(String meterId, int offset, int limit, String columnName, String order);

    /**
     * Retrieves meter history entries from the database by meter ID and date range.
     *
     * @param meterId    The ID of the meter.
     * @param startDate  The start date of the date range.
     * @param endDate    The end date of the date range.
     * @return An ArrayList of MeterHistory objects associated with the specified meter ID and date range.
     */
    @Query(value = "CALL sp_getMeterHistoryByMeterIdUsingDate(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<MeterHistory> getMeterHistoryByMeterIdUsingDate(String meterId, LocalDate startDate, LocalDate endDate);

    /**
     * Counts the number of meter history entries associated with a specific meter.
     *
     * @param meterId The ID of the meter.
     * @return The total number of meter history entries associated with the specified meter.
     */
    @Query(value = "CALL sp_countMeterHistoryByMeterId(?1)", nativeQuery = true)
    int countMeterHistoryByMeterId(String meterId);

    /**
     * Updates the details of a meter history entry in the database.
     *
     * @param id    The ID of the meter history entry to update.
     * @param date  The updated date of the meter reading.
     * @param value The updated value of the meter reading.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateMeterHistory(?1, ?2, ?3)", nativeQuery = true)
    void updateMeterHistory(int id, LocalDate date, float value);

    /**
     * Deletes a meter history entry from the database by its ID.
     *
     * @param id The ID of the meter history entry to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteMeterHistoryById(?1)", nativeQuery = true)
    void deleteMeterHistoryById(int id);
}
