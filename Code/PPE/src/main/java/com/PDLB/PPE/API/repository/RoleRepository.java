package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the Role repository, which allows us to perform CRUD operations on Role entities in the database.
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {


    /**
     * Retrieves all roles from the database.
     *
     * @return An ArrayList of all roles stored in the database.
     */
    @Query(value = "CALL sp_getAllRoles", nativeQuery = true)
    ArrayList<Role> getAllRoles();

    /**
     * Retrieves a role from the database by its ID.
     *
     * @param id The ID of the role to retrieve.
     * @return The role corresponding to the specified ID.
     */
    @Query(value = "CALL sp_getRoleById(?1)", nativeQuery = true)
    Role getRoleById(int id);
}
