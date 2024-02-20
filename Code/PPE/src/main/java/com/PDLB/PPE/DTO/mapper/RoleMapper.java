package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Role;
import com.PDLB.PPE.DTO.model.RoleDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * This component class is responsible for mapping Role entities to RoleDto objects.
 */
@Component
public class RoleMapper {

    /**
     * Converts a Role entity to a RoleDto object.
     *
     * @param role The Role entity to convert
     * @return The converted RoleDto object, or null if the input is null
     */
    public RoleDto toDto(Role role){
        if (role == null)
            return null;

        return new RoleDto(role.getId(), role.getValue());
    }

    /**
     * Converts a list of Role entities to a list of RoleDto objects.
     *
     * @param roles The list of Role entities to convert
     * @return The converted list of RoleDto objects
     */
    public ArrayList<RoleDto> toDtos(ArrayList<Role> roles){
        ArrayList<RoleDto> dtos = new ArrayList<>();
        for (Role role: roles) {
            dtos.add(toDto(role));
        }
        return dtos;
    }
}
