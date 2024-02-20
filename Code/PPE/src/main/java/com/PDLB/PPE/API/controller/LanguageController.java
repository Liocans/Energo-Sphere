package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.LanguageService;
import com.PDLB.PPE.DTO.model.LanguageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods related to language.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/language")
public class LanguageController {

    @Autowired
    private LanguageService languageService;

    /**
     * Endpoint that retrieves all available languages.
     *
     * @return An ArrayList of LanguageDto objects representing the languages.
     */
    @GetMapping("/getAllLanguages")
    public ArrayList<LanguageDto> getAllLanguages() {
        return languageService.getAllLanguages();
    }

    /**
     * Endpoint that retrieves a language by its ID.
     *
     * @param id The ID of the language to retrieve.
     * @return A LanguageDto object representing the language.
     */
    @GetMapping("/getLanguageById")
    public LanguageDto getLanguageById(@RequestParam int id) {
        return languageService.getLanguageById(id);
    }
}
