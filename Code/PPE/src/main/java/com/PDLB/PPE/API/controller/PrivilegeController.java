package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.PrivilegeService;
import com.PDLB.PPE.DTO.model.PrivilegeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to privilege.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/privilege")
public class PrivilegeController {
    @Autowired
    PrivilegeService privilegeService;

    /**
     * Endpoint that retrieves all privileges.
     *
     * @return An ArrayList of privilegesDto objects representing the privilege.
     */
    @GetMapping("/getAllPrivileges")
    public ArrayList<PrivilegeDto> getAllPrivileges(){
        return privilegeService.getAllPrivileges();
    }

    /**
     * Endpoint that retrieves a privilege by its ID.
     *
     * @param id The ID of the privilege to retrieve.
     * @return The privilegeDto object representing the privilege.
     */
    @GetMapping("/getPrivilegeById")
    public PrivilegeDto getPrivilegeById(@RequestParam int id){
        return privilegeService.getPrivilegeById(id);
    }

    /**
     * Endpoint that retrieves a privilege by its ID.
     *
     * @param customerId The ID of the customer
     * @param walletId The ID of the wallet
     * @return The privilegeDto object representing the privilege.
     */
    @GetMapping("/getPrivilegeByCustomerIdAndWalletId")
    public PrivilegeDto getPrivilegeByCustomerIdAndWalletId(String customerId, String walletId){
        return privilegeService.getPrivilegeByCustomerIdAndWalletId(customerId, walletId);
    }
}
