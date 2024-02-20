package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.EnergyType;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The EnergyTypeMapper class provides mapping methods between EnergyType and EnergyTypeDto objects.
 */
@Component
public class EnergyTypeMapper {

    /**
     * Maps an EnergyType object to an EnergyTypeDto object.
     *
     * @param energyType The EnergyType object to be mapped.
     * @return The corresponding EnergyTypeDto object.
     */
    public EnergyTypeDto toDto(EnergyType energyType) {
        if (energyType == null)
            return null;

        return new EnergyTypeDto(
                energyType.getId(),
                energyType.getValue()
        );
    }

    /**
     * Maps an ArrayList of EnergyType objects to an ArrayList of EnergyTypeDto objects.
     *
     * @param energyTypes the ArrayList of EnergyType objects to be mapped
     * @return the corresponding ArrayList of EnergyTypeDto objects
     */
    public ArrayList<EnergyTypeDto> toDtos(ArrayList<EnergyType> energyTypes) {
        ArrayList<EnergyTypeDto> dtos = new ArrayList<>();
        for (EnergyType energyType : energyTypes) {
            dtos.add(toDto(energyType));
        }
        return dtos;
    }
}
