package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.ContractEnergyTypeService;
import com.PDLB.PPE.DTO.model.ContractEnergyTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allow us to use the different path to call specifiy method link to the energy of contract
 */
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/contractEnergyType")
public class ContractEnergyTypeController {

    @Autowired
    private ContractEnergyTypeService contractEnergyTypeService;

    /**
     * Endpoint to create a new contractEnergyType.
     *
     * @param contractEnergyTypeDto the contractEnergyType to be created
     * @param contractId            id of the contract
     * @return The id of the new contractEnergyType
     */
    @PostMapping("/createContractEnergyType")
    @ResponseStatus(HttpStatus.CREATED)
    public int createContractEnergyType(@RequestBody ContractEnergyTypeDto contractEnergyTypeDto, @RequestParam String contractId) {
        return contractEnergyTypeService.createContractEnergyType(contractEnergyTypeDto, contractId);
    }

    /**
     * Endpoint to get all contractEnergyType.
     *
     * @return a list of all contractEnergyType
     */
    @GetMapping("/getAllContractEnergyTypes")
    public ArrayList<ContractEnergyTypeDto> getAllContractEnergyTypes() {
        return contractEnergyTypeService.getAllContractEnergyTypes();
    }

    /**
     * Endpoint to get a contractEnergyType by its ID.
     *
     * @param id the ID of the contractEnergyType to retrieve
     * @return the contractEnergyType with the given ID
     */
    @GetMapping("/getContractEnergyTypeById")
    public ContractEnergyTypeDto getContractEnergyTypeById(@RequestParam int id) {
        return contractEnergyTypeService.getContractEnergyTypeById(id);
    }

    /**
     * Endpoint that returns a list of ContractEnergyTypeDto objects based on a given contract ID.
     *
     * @param contractId The ID of the contract to retrieve energy types for.
     * @return An ArrayList of ContractEnergyTypeDto objects.
     */
    @GetMapping("/getContractEnergyTypeByContractId")
    public ArrayList<ContractEnergyTypeDto> getContractEnergyTypeByContractId(@RequestParam String contractId) {
        return contractEnergyTypeService.getContractEnergyTypeByContractId(contractId);
    }

    /**
     * Endpoint to update a contractEnergyType.
     *
     * @param contractEnergyTypeDto the contractEnergyType to be update
     */
    @PutMapping("/updateContractEnergyType")
    public void updateContractEnergyType(@RequestBody ContractEnergyTypeDto contractEnergyTypeDto) {
        contractEnergyTypeService.updateContractEnergyType(contractEnergyTypeDto);
    }

    /**
     * Endpoint to delete a contractEnergyType by their ID.
     *
     * @param id the ID of the contractEnergyType to be deleted
     */
    @DeleteMapping("/deleteContractEnergyTypeById")
    public void deleteContractEnergyTypeById(@RequestParam int id) {
        contractEnergyTypeService.deleteContractEnergyTypeById(id);
    }
}
