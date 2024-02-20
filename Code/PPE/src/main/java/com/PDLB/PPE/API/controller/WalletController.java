package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.WalletService;
import com.PDLB.PPE.DTO.model.WalletDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to wallet.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/wallet")
public class WalletController {

    @Autowired
    private WalletService walletService;


    /**
     * Endpoint that creates a new wallet.
     *
     * @param buildingId The building id
     * @param customerId the customer id
     * @return The id of the wallet.
     */
    @PostMapping("/createWallet")
    @ResponseStatus(HttpStatus.CREATED)
    public String createWallet(@RequestParam String buildingId, @RequestParam String customerId) {
        return walletService.createWallet(buildingId, customerId);
    }

    /**
     * Endpoint that retrieves all wallets.
     *
     * @return An ArrayList of WalletDto objects representing the wallets.
     */
    @GetMapping("/getAllWallets")
    public ArrayList<WalletDto> getAllWallets() {
        return walletService.getAllWallets();
    }

    /**
     * Endpoint that retrieves a wallet by its ID.
     *
     * @param id The ID of the wallet to retrieve.
     * @return A WalletDto object representing the wallet.
     */
    @GetMapping("/getWalletById")
    public WalletDto getWalletById(@RequestParam String id) {
        return walletService.getWalletById(id);
    }

    /**
     * Endpoint that retrieves all wallets for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve wallets for.
     * @return An ArrayList of WalletDto objects representing the wallets.
     */
    @GetMapping("/getWalletByCustomerId")
    public ArrayList<WalletDto> getWalletByCustomerId(@RequestParam String customerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return walletService.getWalletByCustomerId(customerId, offset, limit);
    }

    /**
     * Endpoint that retrieves the count of wallets associated with a specific customer.
     *
     * @param customerId The ID of the customer for whom wallets are counted.
     * @return The count of wallets associated with the specified customer.
     */
    @GetMapping("/countWalletByCustomerId")
    public int countWalletByCustomerId(@RequestParam String customerId){
        return walletService.countWalletByCustomerId(customerId);
    }
}

