package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.EnergyTypeRepository;
import com.PDLB.PPE.DTO.mapper.EnergyTypeMapper;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing types of energy and their associated data.
 */
@Service
public class EnergyTypeService {

    @Autowired
    private EnergyTypeRepository energyTypeRepository;

    @Autowired
    private EnergyTypeMapper energyTypeMapper;

    /**
     * Returns all energy types.
     *
     * @return an ArrayList of EnergyTypeDto objects representing all energy types.
     */
    public ArrayList<EnergyTypeDto> getAllEnergyTypes() {
        return energyTypeMapper.toDtos(energyTypeRepository.getAllEnergyTypes());
    }

    /**
     * Returns a specific energy type by its ID.
     *
     * @param id an integer representing the ID of the energy type to retrieve.
     * @return an EnergyTypeDto object representing the energy type.
     */
    public EnergyTypeDto getEnergyTypeById(int id) {
        return energyTypeMapper.toDto(energyTypeRepository.getEnergyTypeById(id));
    }

    /**
     * Returns a list of energy types based on a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve energy types for.
     * @return An ArrayList of EnergyTypeDto objects.
     */
    public ArrayList<EnergyTypeDto> getEnergyTypeByProviderId(String providerId) {
        return energyTypeMapper.toDtos(energyTypeRepository.getEnergyTypeByProviderId(providerId));
    }

}
