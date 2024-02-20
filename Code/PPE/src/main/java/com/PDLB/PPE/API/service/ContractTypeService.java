package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.ContractTypeRepository;
import com.PDLB.PPE.DTO.mapper.ContractTypeMapper;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing type of contracts and their associated data.
 */
@Service
public class ContractTypeService {

    @Autowired
    private ContractTypeRepository contractTypeRepository;

    @Autowired
    private ContractTypeMapper contractTypeMapper;

    /**
     * Returns all contract types.
     *
     * @return an ArrayList of ContractTypeDto objects representing all contract types.
     */
    public ArrayList<ContractTypeDto> getAllContractTypes() {

        return contractTypeMapper.toDtos(contractTypeRepository.getAllContractTypes());
    }

    /**
     * Returns a specific contract type by its ID.
     *
     * @param id an integer representing the ID of the contract type to retrieve.
     * @return a ContractTypeDto object representing the contract type.
     */
    public ContractTypeDto getContractTypeById(int id) {
        return contractTypeMapper.toDto(contractTypeRepository.getContractTypeById(id));
    }
}
