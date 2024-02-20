package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.BuildingRepository;
import com.PDLB.PPE.DTO.mapper.BuildingMapper;
import com.PDLB.PPE.DTO.model.BuildingDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing buildings and their associated data.
 */
@Service
public class BuildingService {

    @Autowired
    private BuildingRepository buildingRepository;
    @Autowired
    private BuildingMapper buildingMapper;

    /**
     * Create a new building in the database
     *
     * @param building   The BuildingDto object containing the building data
     * @param customerId The ID of the customer creating the building
     * @return The id of the new building
     */
    public String createBuilding(BuildingDto building, String customerId) {
        return buildingRepository.createBuilding(
                building.isMain(),
                building.getBuildingName(),
                building.getRoom(),
                building.getStreet(),
                building.getNumber(),
                building.getCity(),
                building.getZipCode(),
                customerId
        );
    }

    /**
     * Get all buildings in the database
     *
     * @param offset The record number where pagination is done
     * @param limit The number of object return
     * @return An ArrayList of BuildingDto objects representing all buildings in the database
     */
    public ArrayList<BuildingDto> getAllBuildings(int offset, int limit) {
        return buildingMapper.toDtos(buildingRepository.getAllBuildings(offset, limit));
    }


    /**
     * Get count all the buildings in the database
     *
     * @return The number of building in the database
     */
    public int countAllBuildings(){
        return buildingRepository.countAllBuildings();
    }

    /**
     * Get a building by its ID
     *
     * @param id The ID of the building to get
     * @return A BuildingDto object representing the building with the given ID
     */
    public BuildingDto getBuildingById(String id) {
        return buildingMapper.toDto(buildingRepository.getBuildingById(id));
    }

    /**
     * Get a building by its address
     *
     * @param street  The street of the building to get
     * @param number  The number of the building to get
     * @param city    The city of the building to get
     * @param zipCode The zip code of the building to get
     * @return A BuildingDto object representing the building with the given address
     */
    public BuildingDto getBuildingByAdress(String street, String number, String city, int zipCode) {
        return buildingMapper.toDto(buildingRepository.getBuildingByAdress(street, number, city, zipCode));
    }

    /**
     * Get a building by the customer id
     *
     * @param customerId The ID of the customer creating the building
     * @return An ArrayList of BuildingDto objects
     */
    public ArrayList<BuildingDto> getBuildingByCustomerId(String customerId, int offset, int limit) {
        return buildingMapper.toDtos(buildingRepository.getBuildingByCustomerId(customerId, offset, limit));
    }

    /**
     * Get the number of buildings by the customer id
     *
     * @param customerId The ID of the customer creating the building
     * @return An interger that represent the number of buildings
     */
    public int countBuildingByCustomerId(String customerId) {return buildingRepository.countBuildingByCustomerId(customerId);}

    /**
     * Update a building in the database
     *
     * @param building   The BuildingDto object containing the updated building data
     */
    public void updateBuilding(BuildingDto building) {
        buildingRepository.updateBuilding(
                building.getId(),
                building.isMain(),
                building.getBuildingName(),
                building.getRoom(),
                building.getStreet(),
                building.getNumber(),
                building.getCity(),
                building.getZipCode()
        );
    }

    /**
     * Delete a building by its ID
     *
     * @param id The ID of the building to delete
     */
    public void deleteBuildingById(String id) {
        buildingRepository.deleteBuildingById(id);
    }

    /**
     * Delete a building by its address
     *
     * @param street  The street of the building to delete
     * @param number  The number of the building to delete
     * @param city    The city of the building to delete
     * @param zipCode The zip code of the building to delete
     */
    public void deleteBuildingByAdress(String street, String number, String city, int zipCode) {
        buildingRepository.deleteBuildingByAdress(street, number, city, zipCode);
    }

}
