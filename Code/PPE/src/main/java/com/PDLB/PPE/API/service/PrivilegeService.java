package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.PrivilegeRepository;
import com.PDLB.PPE.DTO.mapper.PrivilegeMapper;
import com.PDLB.PPE.DTO.model.PrivilegeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing privilege and their associated data.
 */
@Service
public class PrivilegeService {

    @Autowired
    PrivilegeRepository privilegeRepository;
    @Autowired
    PrivilegeMapper privilegeMapper;

    /**
     * Retrieves all privileges.
     *
     * @return An ArrayList of privilegesDto objects representing the privilege.
     */
    public ArrayList<PrivilegeDto> getAllPrivileges(){
        return privilegeMapper.toDtos(privilegeRepository.getAllPrivileges());
    }

    /**
     * Retrieves a privilege by its ID.
     *
     * @param id The ID of the privilege to retrieve.
     * @return The privilegeDto object representing the privilege.
     */
    public PrivilegeDto getPrivilegeById(int id){
        return privilegeMapper.toDto(privilegeRepository.getPrivilegeById(id));
    }

    /**
     * Retrieves a privilege by its ID.
     *
     * @param customerId The ID of the customer
     * @param walletId The ID of the wallet
     * @return The privilegeDto object representing the privilege.
     */
    public PrivilegeDto getPrivilegeByCustomerIdAndWalletId(String customerId, String walletId){
        return privilegeMapper.toDto(privilegeRepository.getPrivilegeByCustomerIdAndWalletId(customerId, walletId));
    }
}
