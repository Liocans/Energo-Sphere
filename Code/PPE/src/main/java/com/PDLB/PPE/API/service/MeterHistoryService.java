package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.MeterHistoryRepository;
import com.PDLB.PPE.DTO.mapper.MeterHistoryMapper;
import com.PDLB.PPE.DTO.model.MeterHistoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * This service class provides methods for managing histories of meter and their associated data.
 */
@Service
public class MeterHistoryService {

    @Autowired
    private MeterHistoryRepository meterHistoryRepository;
    @Autowired
    private MeterHistoryMapper meterHistoryMapper;

    /**
     * Creates a new meter history for a given meter ID.
     *
     * @param meterHistoryDto The MeterHistoryDto object representing the meter history to create.
     * @param meterId         The ID of the meter to create the history for.
     * @return The id of the meterHistory
     */
    public int createMeterHistory(MeterHistoryDto meterHistoryDto, String meterId) {
        return meterHistoryRepository.createMeterHistory(meterHistoryDto.getDate(), meterHistoryDto.getValue(), meterId);
    }

    /**
     * Retrieves all meter history records for a given meter ID.
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return An ArrayList of MeterHistoryDto objects representing the meter history records.
     */
    public ArrayList<MeterHistoryDto> getMeterHistoryByMeterId(String meterId, int offset, int limit, String columnName, String order) {
        return meterHistoryMapper.toDtos(meterHistoryRepository.getMeterHistoryByMeterId(meterId, offset, limit, columnName, order));
    }

    /**
     * Retrieves all meter history records for a given meter ID, a start date and an end date
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @param startDate    Starting Date
     * @param endDate      Ending Date
     * @return An ArrayList of MeterHistoryDto objects representing the meter history records.
     */
    public ArrayList<MeterHistoryDto> getMeterHistoryByMeterIdUsingDate(String meterId, LocalDate startDate, LocalDate endDate){
        return meterHistoryMapper.toDtos(meterHistoryRepository.getMeterHistoryByMeterIdUsingDate(meterId, startDate, endDate));
    }

    /**
     * Retrieves The number of history line.
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @return The number of history line
     */
    public int countMeterHistoryByMeterId(@RequestParam String meterId){
        return meterHistoryRepository.countMeterHistoryByMeterId(meterId);
    }

    /**
     * Updates an existing meter history record.
     *
     * @param meterHistoryDto The MeterHistoryDto object representing the meter history record to update.
     */
    public void updateMeterHistory(MeterHistoryDto meterHistoryDto) {
        meterHistoryRepository.updateMeterHistory(meterHistoryDto.getId(), meterHistoryDto.getDate(), meterHistoryDto.getValue());
    }

    /**
     * Deletes an existing meter history record by its ID.
     *
     * @param id The ID of the meter history record to delete.
     */
    public void deleteMeterHistoryById(int id) {
        meterHistoryRepository.deleteMeterHistoryById(id);
    }


}
