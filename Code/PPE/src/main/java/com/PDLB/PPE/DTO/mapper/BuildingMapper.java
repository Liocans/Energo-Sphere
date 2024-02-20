package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Building;
import com.PDLB.PPE.DTO.model.BuildingDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The BuildingMapper class provides mapping methods between Building and BuildingDto objects.
 */
@Component
public class BuildingMapper {

    /**
     * Maps a Building object to a BuildingDto object.
     *
     * @param building the Building object to be mapped
     * @return the corresponding BuildingDto object
     */
    public BuildingDto toDto(Building building) {
        if (building == null)
            return null;

        return new BuildingDto(
                building.getId(),
                building.getBuildingName(),
                building.getCity(),
                building.isMain(),
                building.getNumber(),
                building.getRoom(),
                building.getStreet(),
                building.getZipCode()
        );
    }

    /**
     * Maps Multiple Building object to Multiple BuildingDto object.
     *
     * @param buildings the array with multiple building object to be mapped
     * @return the corresponding BuildingDto object
     */
    public ArrayList<BuildingDto> toDtos(ArrayList<Building> buildings) {
        ArrayList<BuildingDto> dtos = new ArrayList<>();
        for (Building building : buildings) {
            dtos.add(toDto(building));
        }
        return dtos;
    }
}
