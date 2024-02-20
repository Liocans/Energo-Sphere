package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.WalletCustomerService;
import com.PDLB.PPE.DTO.model.WalletCustomerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to wallet customers.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/walletCustomer")
public class WalletCustomerController {

    @Autowired
    private WalletCustomerService walletCustomerService;

    /**
     * Endpoint that creates a new walletCustomer.
     *
     * @param walletId the id of the wallet
     * @param customerId the customer id
     * @param privilege the privilege
     * @return The id of the wallet.
     */
    @PostMapping("/createWalletCustomer")
    @ResponseStatus(HttpStatus.CREATED)
    public int createWalletCustomer(@RequestParam String walletId, @RequestParam String customerId, @RequestParam int privilege) {
        return walletCustomerService.createWalletCustomer(walletId, customerId, privilege);
    }

    /**
     * Endpoint that retrieves all wallet customers linked to a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve linked customers for.
     * @return An ArrayList of WalletCustomerDto objects representing the linked customers.
     */
    @GetMapping("/getWalletCustomerByWalletId")
    public ArrayList<WalletCustomerDto> getWalletCustomerByWalletId(@RequestParam String walletId) {
        return walletCustomerService.getWalletCustomerByWalletId(walletId);
    }
}

