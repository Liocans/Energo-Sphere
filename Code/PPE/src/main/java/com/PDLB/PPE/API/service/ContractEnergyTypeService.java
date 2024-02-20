package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.ContractEnergyTypeRepository;
import com.PDLB.PPE.DTO.mapper.ContractEnergyTypeMapper;
import com.PDLB.PPE.DTO.model.ContractEnergyTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This service class provides methods for managing contract energy types and their associated data.
 */
@Service
public class ContractEnergyTypeService {

    @Autowired
    private ContractEnergyTypeRepository contractEnergyTypeRepository;
    @Autowired
    private ContractEnergyTypeMapper contractEnergyTypeMapper;

    /**
     * Create a new contractEnergyType.
     *
     * @param contractEnergyTypeDto the contractEnergyType to be created
     * @param contractId            id of the contract
     * @return The id of the new contractEnergyType
     */
    public int createContractEnergyType(@RequestBody ContractEnergyTypeDto contractEnergyTypeDto, String contractId) {
        return contractEnergyTypeRepository.createContractEnergyType(contractEnergyTypeDto.getDayPrice(), contractEnergyTypeDto.getNightPrice(), contractId, contractEnergyTypeDto.getEnergyTypeId());
    }

    /**
     * Get all contractEnergyType.
     *
     * @return a list of all contractEnergyType
     */
    public ArrayList<ContractEnergyTypeDto> getAllContractEnergyTypes() {
        return contractEnergyTypeMapper.toDtos(contractEnergyTypeRepository.getAllContractEnergyTypes());
    }

    /**
     * Get a contractEnergyType by its ID.
     *
     * @param id the ID of the contractEnergyType to retrieve
     * @return the contractEnergyType with the given ID
     */
    public ContractEnergyTypeDto getContractEnergyTypeById(@RequestParam int id) {
        return contractEnergyTypeMapper.toDto(contractEnergyTypeRepository.getContractEnergyTypeById(id));
    }

    /**
     * Returns a list of ContractEnergyTypeDto objects based on a given contract ID.
     *
     * @param contractId The ID of the contract to retrieve energy types for.
     * @return An ArrayList of ContractEnergyTypeDto objects.
     */
    public ArrayList<ContractEnergyTypeDto> getContractEnergyTypeByContractId(String contractId) {
        return contractEnergyTypeMapper.toDtos(contractEnergyTypeRepository.getContractEnergyTypeByContractId(contractId));
    }

    /**
     * Update a contractEnergyType.
     *
     * @param contractEnergyTypeDto the contractEnergyType to be created
     */
    public void updateContractEnergyType(@RequestBody ContractEnergyTypeDto contractEnergyTypeDto) {
        contractEnergyTypeRepository.updateContractEnergyType(contractEnergyTypeDto.getId(), contractEnergyTypeDto.getDayPrice(), contractEnergyTypeDto.getNightPrice());
    }

    /**
     * Delete a contractEnergyType by their ID.
     *
     * @param id the ID of the contractEnergyType to be deleted
     */
    public void deleteContractEnergyTypeById(@RequestParam int id) {
        contractEnergyTypeRepository.deleteContractEnergyTypeById(id);
    }
}
