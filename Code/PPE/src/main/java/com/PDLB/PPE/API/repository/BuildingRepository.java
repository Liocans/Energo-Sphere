package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Building;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * This interface represents the Building repository, which allows us to perform CRUD operations
 * on Building entities in the database.
 */
@Repository
public interface BuildingRepository extends JpaRepository<Building, String> {

    /**
     * Creates a new building entity in the database.
     *
     * @param isMain      Boolean indicating whether the building is the main one.
     * @param buildingName The name of the building.
     * @param room        The room of the building.
     * @param street      The street of the building.
     * @param number      The building number.
     * @param city        The city where the building is located.
     * @param zipCode     The ZIP code of the building.
     * @param customerId  The ID of the customer associated with the building.
     * @return The ID of the newly created building.
     */
    @Transactional
    @Query(value = "CALL sp_createBuilding(?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)", nativeQuery = true)
    String createBuilding(Boolean isMain, String buildingName, String room, String street, String number, String city, int zipCode, String customerId);

    /**
     * Retrieves a list of buildings from the database.
     *
     * @param offset The offset for pagination.
     * @param limit  The maximum number of buildings to retrieve.
     * @return An ArrayList of Building objects.
     */
    @Query(value = "CALL sp_getAllBuilding(?1, ?2)", nativeQuery = true)
    ArrayList<Building> getAllBuildings(int offset, int limit);

    /**
     * Counts all the buildings in the database.
     *
     * @return The total number of buildings.
     */
    @Query(value = "CALL sp_countAllBuilding", nativeQuery = true)
    int countAllBuildings();

    /**
     * Retrieves a building from the database by its ID.
     *
     * @param id The ID of the building to retrieve.
     * @return The Building object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getBuildingById(?1)", nativeQuery = true)
    Building getBuildingById(String id);

    /**
     * Retrieves a building from the database by its address.
     *
     * @param street  The street of the building.
     * @param number  The building number.
     * @param city    The city where the building is located.
     * @param zipCode The ZIP code of the building.
     * @return The Building object with the specified address, or null if not found.
     */
    @Query(value = "CALL sp_getBuildingByAdress(?1, ?2, ?3, ?4)", nativeQuery = true)
    Building getBuildingByAdress(String street, String number, String city, int zipCode);

    /**
     * Retrieves buildings associated with a specific customer from the database.
     *
     * @param customerId The ID of the customer.
     * @param offset     The offset for pagination.
     * @param limit      The maximum number of buildings to retrieve.
     * @return An ArrayList of Building objects associated with the specified customer.
     */
    @Query(value = "CALL sp_getBuildingByCustomerId(?1, ?2, ?3)", nativeQuery = true)
    ArrayList<Building> getBuildingByCustomerId(String customerId, int offset, int limit);

    /**
     * Counts the buildings associated with a specific customer.
     *
     * @param customerId The ID of the customer.
     * @return The total number of buildings associated with the specified customer.
     */
    @Query(value = "CALL sp_countBuildingByCustomerId(?1)", nativeQuery = true)
    int countBuildingByCustomerId(String customerId);

    /**
     * Updates the details of a building in the database.
     *
     * @param id          The ID of the building to update.
     * @param isMain      Boolean indicating whether the building is the main one.
     * @param buildingName The name of the building.
     * @param room        The room of the building.
     * @param street      The street of the building.
     * @param number      The building number.
     * @param city        The city where the building is located.
     * @param zipCode     The ZIP code of the building.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_updateBuilding(?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)", nativeQuery = true)
    void updateBuilding(String id, Boolean isMain, String buildingName, String room, String street, String number, String city, int zipCode);

    /**
     * Deletes a building from the database by its ID.
     *
     * @param id The ID of the building to delete.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteBuildingById(?1)", nativeQuery = true)
    void deleteBuildingById(String id);

    /**
     * Deletes a building from the database by its address.
     *
     * @param street  The street of the building.
     * @param number  The building number.
     * @param city    The city where the building is located.
     * @param zipCode The ZIP code of the building.
     */
    @Modifying
    @Transactional
    @Query(value = "CALL sp_deleteBuildingByAdress(?1, ?2, ?3, ?4)", nativeQuery = true)
    void deleteBuildingByAdress(String street, String number, String city, int zipCode);


}
