package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.MeterHistoryService;
import com.PDLB.PPE.DTO.model.MeterHistoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to meter history.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/meterHistory")
public class MeterHistoryController {

    @Autowired
    private MeterHistoryService meterHistoryService;

    /**
     * Endpoint that creates a new meter history for a given meter ID.
     *
     * @param meterHistoryDto The MeterHistoryDto object representing the meter history to create.
     * @param meterId         The ID of the meter to create the history for.
     * @return The id of the meterHistory
     */
    @PostMapping("/createMeterHistory")
    @ResponseStatus(HttpStatus.CREATED)
    public int createMeterHistory(@RequestBody MeterHistoryDto meterHistoryDto, @RequestParam String meterId) {
        return meterHistoryService.createMeterHistory(meterHistoryDto, meterId);
    }

    /**
     * Endpoint that retrieves all meter history records for a given meter ID.
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return An ArrayList of MeterHistoryDto objects representing the meter history records.
     */
    @GetMapping("/getMeterHistoryByMeterId")
    public ArrayList<MeterHistoryDto> getMeterHistoryByMeterId(@RequestParam String meterId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit, @RequestParam(defaultValue = "date") String columnName, @RequestParam(defaultValue = "-1") int order) {
        return meterHistoryService.getMeterHistoryByMeterId(meterId, offset, limit, columnName, (order == 1 ? "ASC":"DESC"));
    }

    /**
     * Endpoint that retrieves all meter history records for a given meter ID, a start date and an end date
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @param startDate    Starting Date
     * @param endDate      Ending Date
     * @return An ArrayList of MeterHistoryDto objects representing the meter history records.
     */
    @GetMapping("/getMeterHistoryByMeterIdUsingDate")
    public ArrayList<MeterHistoryDto> getMeterHistoryByMeterIdUsingDate(@RequestParam String meterId, @RequestParam LocalDate startDate, @RequestParam LocalDate endDate){
        return meterHistoryService.getMeterHistoryByMeterIdUsingDate(meterId, startDate, endDate);
    }

    /**
     * Endpoint that retrieves The number of history line.
     *
     * @param meterId The ID of the meter to retrieve history records for.
     * @return The number of history line
     */
    @GetMapping("/countMeterHistoryByMeterId")
    public int countMeterHistoryByMeterId(@RequestParam String meterId){
        return meterHistoryService.countMeterHistoryByMeterId(meterId);
    }

    /**
     * Endpoint that updates an existing meter history record.
     *
     * @param meterHistoryDto The MeterHistoryDto object representing the meter history record to update.
     */
    @PutMapping("/updateMeterHistory")
    public void updateMeterHistory(@RequestBody MeterHistoryDto meterHistoryDto) {
        meterHistoryService.updateMeterHistory(meterHistoryDto);
    }

    /**
     * Endpoint that deletes an existing meter history record by its ID.
     *
     * @param id The ID of the meter history record to delete.
     */
    @DeleteMapping("/deleteMeterHistoryById")
    public void deleteMeterHistoryById(@RequestParam int id) {
        meterHistoryService.deleteMeterHistoryById(id);
    }
}
