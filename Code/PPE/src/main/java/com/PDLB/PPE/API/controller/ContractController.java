package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.ContractService;
import com.PDLB.PPE.DTO.model.ContractDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allow us to use the different path to call specifiy method link to contract
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/contract")
public class ContractController {


    @Autowired
    private ContractService contractService;

    /**
     * Endpoint to create a new contract.
     *
     * @param contract the contract to be created
     * @return The id of the new contract
     */
    @PostMapping("/createContract")
    @ResponseStatus(HttpStatus.CREATED)
    public String createContract(@RequestBody ContractDto contract) {
        return contractService.createContract(contract);
    }

    /**
     * Endpoint to get all contracts.
     *
     * @return a list of all contracts
     */
    @GetMapping("/getAllContracts")
    public ArrayList<ContractDto> getAllContracts() {
        return contractService.getAllContracts();
    }

    /**
     * Endpoint to get a contract by its ID.
     *
     * @param id the ID of the contract to retrieve
     * @return the contract with the given ID
     */
    @GetMapping("/getContractById")
    public ContractDto getContractById(@RequestParam String id) {
        return contractService.getContractById(id);
    }

    /**
     * Endpoint to get all contracts associated with a specific customer.
     *
     * @param customerId the ID of the customer to retrieve contracts for
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of all contracts associated with the given customer ID
     */
    @GetMapping("/getContractByCustomerId")
    public ArrayList<ContractDto> getContractByCustomerId(@RequestParam String customerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return contractService.getContractByCustomerId(customerId, offset, limit);
    }

    /**
     * Endpoint to get the number of contract for one specific customer
     *
     * @param customerId the ID of the customer to retrieve
     * @return The number of contract of one specific customer
     */
    @GetMapping("/countContractByCustomerId")
    public int countContractByCustomerId(@RequestParam String customerId){
        return contractService.countContractByCustomerId(customerId);
    }

    /**
     * Endpoint to get all contracts associated with a specific provider.
     *
     * @param providerId the ID of the provider to retrieve contracts for
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of all contracts associated with the given provider ID
     */
    @GetMapping("/getContractByProviderId")
    public ArrayList<ContractDto> getContractByProviderId(@RequestParam String providerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return contractService.getContractByProviderId(providerId, offset, limit);
    }

    /**
     * Endpoint to get the number of contract for one specific provider
     *
     * @param providerId the ID of the provider to retrieve
     * @return The number of contract of one specific provider
     */
    @GetMapping("/countContractByProviderId")
    public int countContractByProviderId(@RequestParam String providerId){
        return contractService.countContractByProviderId(providerId);
    }

    /**
     * Endpoint to update an existing contract.
     *
     * @param contract the updated contract details
     */
    @PutMapping("/updateContract")
    public void updateContract(@RequestBody ContractDto contract) {
        contractService.updateContract(contract);
    }

    /**
     * Endpoint to delete a contract by its ID.
     *
     * @param id the ID of the contract to delete
     */
    @DeleteMapping("/deleteContractById")
    public void deleteContractById(@RequestParam String id) {
        contractService.deleteContractById(id);
    }
}
