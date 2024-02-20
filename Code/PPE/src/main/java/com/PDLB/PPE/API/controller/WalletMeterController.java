package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.WalletMeterService;
import com.PDLB.PPE.DTO.model.WalletMeterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to wallet meter.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/walletMeter")
public class WalletMeterController {

    @Autowired
    private WalletMeterService walletMeterService;


    /**
     * Endpoint that create a new walletMeter
     *
     * @param walletId The ID of the wallet
     * @param meterId The ID of the meter
     * @return id of the new record
     */
    @PostMapping("/createWalletMeter")
    @ResponseStatus(HttpStatus.CREATED)
    public int createWalletMeter(@RequestParam String walletId,@RequestParam String meterId) {
        return walletMeterService.createWalletMeter(walletId, meterId);
    }

    /**
     * Endpoint that retrieves all wallet meter records for a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve meter records for.
     * @return An ArrayList of WalletMeterDto objects representing the wallet meter records.
     */
    @GetMapping("/getWalletMeterByWalletId")
    public ArrayList<WalletMeterDto> getWalletMeterByWalletId(@RequestParam String walletId) {
        return walletMeterService.getWalletMeterByWalletId(walletId);
    }
}
