package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.ContractEnergyType;
import com.PDLB.PPE.DTO.model.ContractEnergyTypeDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The ContractEnergyTypeMapper class provides mapping methods between ContractEnergyType and ContractEnergyTypeDto objects.
 */
@Component
public class ContractEnergyTypeMapper {

    /**
     * Maps a ContractEnergyType object to a ContractEnergyTypeDto object.
     *
     * @param contractEnergyType the ContractEnergyType object to be mapped
     * @return the corresponding ContractEnergyTypeDto object
     */
    public ContractEnergyTypeDto toDto(ContractEnergyType contractEnergyType) {
        if (contractEnergyType == null)
            return null;

        return new ContractEnergyTypeDto(
                contractEnergyType.getId(),
                contractEnergyType.getDayPrice(),
                contractEnergyType.getNightPrice(),
                contractEnergyType.getEnergyTypeId()
        );
    }

    /**
     * Maps an ArrayList of ContractEnergyType objects to an ArrayList of ContractEnergyTypeDto objects.
     *
     * @param contractEnergyTypes the ArrayList of ContractEnergyType objects to be mapped
     * @return the corresponding ArrayList of ContractEnergyTypeDto objects
     */
    public ArrayList<ContractEnergyTypeDto> toDtos(ArrayList<ContractEnergyType> contractEnergyTypes) {
        ArrayList<ContractEnergyTypeDto> dtos = new ArrayList<>();
        for (ContractEnergyType contractEnergyType : contractEnergyTypes) {
            dtos.add(toDto(contractEnergyType));
        }
        return dtos;
    }

}
