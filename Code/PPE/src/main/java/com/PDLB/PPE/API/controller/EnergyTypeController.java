package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.EnergyTypeService;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to the type of energy.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/energyType")
public class EnergyTypeController {

    @Autowired
    private EnergyTypeService energyTypeService;

    /**
     * Endpoint that returns all energy types.
     *
     * @return an ArrayList of EnergyTypeDto objects representing all energy types.
     */
    @GetMapping("/getAllEnergyTypes")
    public ArrayList<EnergyTypeDto> getAllEnergyTypes() {
        return energyTypeService.getAllEnergyTypes();
    }

    /**
     * Endpoint that returns a specific energy type by its ID.
     *
     * @param id an integer representing the ID of the energy type to retrieve.
     * @return an EnergyTypeDto object representing the energy type.
     */
    @GetMapping("/getEnergyTypeById")
    public EnergyTypeDto getEnergyTypeById(@RequestParam int id) {
        return energyTypeService.getEnergyTypeById(id);
    }

    /**
     * Endpoint that returns a list of energy types based on a given provider ID.
     *
     * @param providerId The ID of the provider to retrieve energy types for.
     * @return An ArrayList of EnergyTypeDto objects.
     */
    @GetMapping("/getEnergyTypeByProviderId")
    public ArrayList<EnergyTypeDto> getEnergyTypeByProviderId(@RequestParam String providerId) {
        return energyTypeService.getEnergyTypeByProviderId(providerId);
    }
}

