package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.RoleRepository;
import com.PDLB.PPE.DTO.mapper.RoleMapper;
import com.PDLB.PPE.DTO.model.RoleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing role and their associated data.
 */
@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private RoleMapper roleMapper;

    /**
     * Retrieves all roles.
     *
     * @return An ArrayList of RoleDto objects representing the roles.
     */
    public ArrayList<RoleDto> getAllRoles(){
        return roleMapper.toDtos(roleRepository.getAllRoles());
    }

    /**
     * Retrieves a role by its ID.
     *
     * @param id The ID of the role to retrieve.
     * @return The RoleDto object representing the role.
     */
    public RoleDto getRoleById(int id) {
        return roleMapper.toDto(roleRepository.getRoleById(id));
    }

}
