package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.MeterService;
import com.PDLB.PPE.DTO.model.MeterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to a meter.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/meter")
public class MeterController {

    @Autowired
    private MeterService meterService;

    /**
     * Endpoint that creates a new meter.
     *
     * @param meter      A MeterDto object representing the meter to be created.
     * @param buildingId The ID of the building the meter belongs to.
     * @return The id of the meter
     */
    @PostMapping("/createMeter")
    @ResponseStatus(HttpStatus.CREATED)
    public String createMeter(@RequestBody MeterDto meter, @RequestParam String buildingId) {
        return meterService.createMeter(meter, buildingId);
    }

    /**
     * Endpoint that returns all meters.
     *
     * @return An ArrayList of MeterDto objects representing all meters.
     */
    @GetMapping("/getAllMeters")
    public ArrayList<MeterDto> getAllMeters() {
        return meterService.getAllMeters();
    }

    /**
     * Endpoint that returns a list of meters based on a given building ID.
     *
     * @param buildingId The ID of the building to retrieve meters for.
     * @return An ArrayList of MeterDto objects.
     */
    @GetMapping("/getMetersByBuildingId")
    public ArrayList<MeterDto> getMetersByBuildingId(@RequestParam String buildingId) {
        return meterService.getMetersByBuildingId(buildingId);
    }

    /**
     * Endpoint that returns a list of meters based on a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve meters for.
     * @return An ArrayList of MeterDto objects.
     */
    @GetMapping("/getMetersByWalletId")
    public ArrayList<MeterDto> getMetersByWalletId(@RequestParam String walletId) {
        return meterService.getMetersByWalletId(walletId);
    }

    /**
     * Endpoint that updates an existing meter.
     *
     * @param meter A MeterDto object representing the updated meter.
     */
    @PutMapping("/updateMeter")
    public void updateMeter(@RequestBody MeterDto meter) {
        meterService.updateMeter(meter);
    }

    /**
     * Endpoint to delete a meter by their ID.
     *
     * @param id the ID of the meter to be deleted
     */
    @DeleteMapping("/deleteMeterById")
    public void deleteMeterById(@RequestParam String id) {
        meterService.deleteMeterById(id);
    }

}
