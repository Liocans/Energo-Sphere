package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.ContractType;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The ContractTypeMapper class provides mapping methods between ContractType and ContractTypeDto objects.
 */
@Component
public class ContractTypeMapper {

    /**
     * Maps a ContractType object to a ContractTypeDto object.
     *
     * @param contractType The ContractType object to be mapped.
     * @return the corresponding ContractTypeDto object
     */
    public ContractTypeDto toDto(ContractType contractType) {
        if (contractType == null)
            return null;

        return new ContractTypeDto(
                contractType.getId(),
                contractType.getValue()
        );
    }

    /**
     * Maps an ArrayList of ContractType objects to an ArrayList of ContractTypeDto objects.
     *
     * @param contractTypes the ArrayList of ContractType objects to be mapped
     * @return the corresponding ArrayList of ContractTypeDto objects
     */
    public ArrayList<ContractTypeDto> toDtos(ArrayList<ContractType> contractTypes) {
        ArrayList<ContractTypeDto> dtos = new ArrayList<>();
        for (ContractType contractType : contractTypes) {
            dtos.add(toDto(contractType));
        }
        return dtos;
    }
}
