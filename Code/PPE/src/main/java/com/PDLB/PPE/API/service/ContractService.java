package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.entity.Contract;
import com.PDLB.PPE.API.repository.ContractRepository;
import com.PDLB.PPE.DTO.mapper.ContractMapper;
import com.PDLB.PPE.DTO.model.ContractDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This service class provides methods for managing contracts and their associated data.
 */
@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ProviderService providerService;
    @Autowired
    private BuildingService buildingService;
    @Autowired
    private ContractTypeService contractTypeService;
    @Autowired
    private ContractMapper contractMapper;

    @Autowired
    private ContractEnergyTypeService contractEnergyTypeService;

    /**
     * Create a new contract.
     *
     * @param contract the contract to be created
     * @return The id of the new contract
     */
    public String createContract(ContractDto contract) {
        return contractRepository.createContract(contract.getStartDate(), contract.getEndDate(), contract.getProviderId(), contract.getContractType().getId(), contract.getBuildingId());
    }

    /**
     * Get all contracts.
     *
     * @return a list of all contracts
     */
    public ArrayList<ContractDto> getAllContracts() {
        return objectsCreator(contractRepository.getAllContracts());
    }

    /**
     * Get a contract by its ID.
     *
     * @param id the ID of the contract to retrieve
     * @return the contract with the given ID
     */
    public ContractDto getContractById(String id) {
        return objectCreator(contractRepository.getContractById(id));
    }

    /**
     * Get all contracts associated with a specific customer.
     *
     * @param customerId the ID of the customer to retrieve contracts for
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of all contracts associated with the given customer ID
     */
    public ArrayList<ContractDto> getContractByCustomerId(String customerId, int offset, int limit) {
        return objectsCreator(contractRepository.getContractByCustomerId(customerId, offset, limit));
    }

    /**
     * Get the number of contract for one specific customer
     *
     * @param customerId the ID of the customer to retrieve
     * @return The number of contract of one specific customer
     */
    public int countContractByCustomerId(@RequestParam String customerId){
        return contractRepository.countContractByCustomerId(customerId);
    }

    /**
     * Get all contracts associated with a specific provider.
     *
     * @param providerId the ID of the provider to retrieve contracts for
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of all contracts associated with the given provider ID
     */
    public ArrayList<ContractDto> getContractByProviderId(String providerId, int offset, int limit) {
        return objectsCreator(contractRepository.getContractByProviderId(providerId, offset, limit));
    }

    /**
     * Get the number of contract for one specific provider
     *
     * @param providerId the ID of the provider to retrieve
     * @return The number of contract of one specific provider
     */
    public int countContractByProviderId(@RequestParam String providerId){
        return contractRepository.countContractByProviderId(providerId);
    }

    /**
     * Update an existing contract.
     *
     * @param contract the updated contract details
     */
    public void updateContract(ContractDto contract) {
        contractRepository.updateContract(contract.getId(), contract.getStartDate(), contract.getEndDate(), contract.getProviderId(), contract.getContractType().getId(), contract.getBuildingId());
    }

    /**
     * Endpoint to delete a contract by its ID.
     *
     * @param id the ID of the contract to delete
     */
    public void deleteContractById(String id) {
        contractRepository.deleteContractById(id);
    }

    /**
     * Creates a list of ContractDto objects based on the provided list of contracts.
     *
     * @param contracts The list of contracts to be converted to ContractDto objects.
     * @return An ArrayList containing ContractDto objects corresponding to the input contracts.
     */
    private ArrayList<ContractDto> objectsCreator(ArrayList<Contract> contracts) {
        ArrayList<ContractDto> objects = new ArrayList<>();
        for (Contract contract : contracts) {
            objects.add(objectCreator(contract));
        }
        return objects;
    }

    /**
     * Creates a ContractDto object from the given Contract object and additional related data.
     *
     * @param contract The Contract object to be converted into a ContractDto.
     * @return A ContractDto object representing the input contract with additional related data.
     */
    private ContractDto objectCreator(Contract contract) {
        return contractMapper.toDto(contract,
                customerService.getCustomerByBuildingId(contract.getBuildingId()),
                providerService.getProviderById(contract.getProviderId()),
                buildingService.getBuildingById(contract.getBuildingId()),
                contractTypeService.getContractTypeById(contract.getContractTypeId()),
                contractEnergyTypeService.getContractEnergyTypeByContractId(contract.getId())
        );
    }
}
