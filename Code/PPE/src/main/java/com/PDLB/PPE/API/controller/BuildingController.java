package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.BuildingService;
import com.PDLB.PPE.DTO.mapper.BuildingMapper;
import com.PDLB.PPE.DTO.model.BuildingDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allow us to use the different path to call specifiy method link to building
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/building")
public class BuildingController {


    @Autowired
    private BuildingService buildingService;

    @Autowired
    private BuildingMapper buildingMapper;

    /**
     * Endpoint to create a new building in the database
     *
     * @param building   The BuildingDto object containing the building data
     * @param customerId The ID of the customer creating the building
     * @return The id of the new building
     */
    @PostMapping("/createBuilding")
    @ResponseStatus(HttpStatus.CREATED)
    public String createBuilding(@RequestBody BuildingDto building, @RequestParam String customerId) {
        return buildingService.createBuilding(building, customerId);
    }

    /**
     * Endpoint to get all buildings in the database
     *
     * @param offset The record number where pagination is done
     * @param limit The number of object return
     * @return An ArrayList of BuildingDto objects representing all buildings in the database
     */
    @GetMapping("/getAllBuildings")
    public ArrayList<BuildingDto> getAllBuildings(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return buildingService.getAllBuildings(offset, limit);
    }

    /**
     * Endpoint to get count all the buildings in the database
     *
     * @return The number of building in the database
     */
    @GetMapping("/countAllBuildings")
    public int countAllBuildings(){
        return buildingService.countAllBuildings();
    }


    /**
     * Endpoint to get a building by its ID
     *
     * @param id The ID of the building to get
     * @return A BuildingDto object representing the building with the given ID
     */
    @GetMapping("/getBuildingById")
    public BuildingDto getBuildingById(@RequestParam String id) {
        return buildingService.getBuildingById(id);
    }

    /**
     * Endpoint to get a building by its address
     *
     * @param street  The street of the building to get
     * @param number  The number of the building to get
     * @param city    The city of the building to get
     * @param zipCode The zip code of the building to get
     * @return A BuildingDto object representing the building with the given address
     */
    @GetMapping("/getBuildingByAdress")
    public BuildingDto getBuildingByAdress(@RequestParam String street, @RequestParam String number, @RequestParam String city, @RequestParam int zipCode) {
        return buildingService.getBuildingByAdress(street, number, city, zipCode);
    }

    /**
     * Endpoint to get a building by the customer id
     *
     * @param customerId The ID of the customer creating the building
     * @return An ArrayList of BuildingDto objects
     */
    @GetMapping("/getBuildingByCustomerId")
    public ArrayList<BuildingDto> getBuildingByCustomerId(@RequestParam String customerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return buildingService.getBuildingByCustomerId(customerId, offset, limit);
    }

    /**
     * Endpoint to get the number of buildings by the customer id
     *
     * @param customerId The ID of the customer creating the building
     * @return An interger that represent the number of buildings
     */
    @GetMapping("countBuildingByCustomerId")
    public int countBuildingByCustomerId(@RequestParam String customerId){
        return buildingService.countBuildingByCustomerId(customerId);
    }

    /**
     * Endpoint to update a building in the database
     *
     * @param building   The BuildingDto object containing the updated building data
     */
    @PutMapping("/updateBuilding")
    public void updateBuilding(@RequestBody BuildingDto building) {
        buildingService.updateBuilding(building);
    }

    /**
     * Endpoint to delete a building by its ID
     *
     * @param id The ID of the building to delete
     */
    @DeleteMapping("/deleteBuildingById")
    public void deleteBuildingById(@RequestParam String id) {
        buildingService.deleteBuildingById(id);
    }

    /**
     * Endpoint to delete a building by its address
     *
     * @param street  The street of the building to delete
     * @param number  The number of the building to delete
     * @param city    The city of the building to delete
     * @param zipCode The zip code of the building to delete
     */
    @DeleteMapping("/deleteBuildingByAdress")
    public void deleteBuildingByAdress(@RequestParam String street, @RequestParam String number, @RequestParam String city, @RequestParam int zipCode) {
        buildingService.deleteBuildingByAdress(street, number, city, zipCode);
    }
}
