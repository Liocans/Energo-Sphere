package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * This interface represents the user repository, which allows us to perform CRUD operations
 * on user entities in the database.
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {

    /**
     * Loads a user from the database by their username.
     *
     * @param username The username of the user to load.
     * @return The user corresponding to the specified username.
     */
    @Query(value = "CALL sp_loadUserByUsername(?1)", nativeQuery = true)
    User loadUserByUsername(String username);
}
