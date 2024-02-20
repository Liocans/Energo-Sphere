package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Privilege;
import com.PDLB.PPE.DTO.model.PrivilegeDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * This component class is responsible for mapping privilege entities to privilegeDto objects.
 */
@Component
public class PrivilegeMapper {

    /**
     * Converts a privilege entity to a privilegeDto object.
     *
     * @param privilege The privilege entity to convert
     * @return The converted privilegeDto object, or null if the input is null
     */
    public PrivilegeDto toDto(Privilege privilege){
        if (privilege == null)
            return null;

        return new PrivilegeDto(privilege.getId(), privilege.getValue());
    }

    /**
     * Converts a list of privilege entities to a list of privilegeDto objects.
     *
     * @param privileges The list of privilege entities to convert
     * @return The converted list of privilegeDto objects
     */
    public ArrayList<PrivilegeDto> toDtos(ArrayList<Privilege> privileges){
        ArrayList<PrivilegeDto> dtos = new ArrayList<>();
        for (Privilege privilege: privileges) {
            dtos.add(toDto(privilege));
        }
        return dtos;
    }
}
