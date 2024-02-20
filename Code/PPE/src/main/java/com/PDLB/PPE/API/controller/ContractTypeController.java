package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.ContractTypeService;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allow us to use the different path to call specifiy method link to type of contract
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/contractType")
public class ContractTypeController {


    @Autowired
    private ContractTypeService contractEnergyService;

    /**
     * Endpoint that returns all contract types.
     *
     * @return an ArrayList of ContractTypeDto objects representing all contract types.
     */
    @GetMapping("/getAllContractTypes")
    public ArrayList<ContractTypeDto> getAllContractTypes() {
        return contractEnergyService.getAllContractTypes();
    }

    /**
     * Endpoint that returns a specific contract type by its ID.
     *
     * @param id an integer representing the ID of the contract type to retrieve.
     * @return a ContractTypeDto object representing the contract type.
     */
    @GetMapping("/getContractTypeById")
    public ContractTypeDto getContractTypeById(@RequestParam int id) {
        return contractEnergyService.getContractTypeById(id);
    }
}
