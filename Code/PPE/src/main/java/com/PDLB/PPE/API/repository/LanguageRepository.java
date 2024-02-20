package com.PDLB.PPE.API.repository;

import com.PDLB.PPE.API.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * This interface represents the type of language repository, which allows us to perform CRUD operations
 * on language entities in the database.
 */
@Repository
public interface LanguageRepository extends JpaRepository<Language, Integer> {

    /**
     * Retrieves all languages from the database.
     *
     * @return An ArrayList of Language objects representing all languages.
     */
    @Query(value = "CALL sp_getAllLanguages", nativeQuery = true)
    ArrayList<Language> getAllLanguages();

    /**
     * Retrieves a language from the database by its ID.
     *
     * @param id The ID of the language to retrieve.
     * @return The Language object with the specified ID, or null if not found.
     */
    @Query(value = "CALL sp_getLanguageById(?1)", nativeQuery = true)
    Language getLanguageById(int id);
}
