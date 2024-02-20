package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Contract;
import com.PDLB.PPE.DTO.model.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The ContractMapper class provides mapping methods between Contract and ContractDto objects.
 */

@Component
public class ContractMapper {

    /**
     * Maps a Contract object to a ContractDto object.
     *
     * @param contract the Contract object to be mapped
     * @param customer the CustomerDto object associated with the Contract object
     * @param provider the ProviderDto object associated with the Contract object
     * @param building the BuildingDto object associated with the Contract object
     * @return the corresponding ContractDto object
     */
    public ContractDto toDto(Contract contract, CustomerDto customer, ProviderDto provider, BuildingDto building, ContractTypeDto contractTypeDto, ArrayList<ContractEnergyTypeDto> contractEnergyTypeDtos) {
        if (building == null)
            return null;

        return new ContractDto(
                contract.getId(),
                contract.getStartDate(),
                contract.getEndDate(),
                provider.getId(),
                provider.getName(),
                contractTypeDto,
                contractEnergyTypeDtos,
                building.getId(),
                building.getAddress(),
                customer.getId()
        );
    }
}
