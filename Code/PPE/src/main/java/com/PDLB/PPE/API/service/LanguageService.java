package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.LanguageRepository;
import com.PDLB.PPE.DTO.mapper.LanguageMapper;
import com.PDLB.PPE.DTO.model.LanguageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing language and their associated data.
 */
@Service
public class LanguageService {

    @Autowired
    private LanguageRepository languageRepository;

    @Autowired
    private LanguageMapper languageMapper;

    /**
     * Retrieves all available languages.
     *
     * @return An ArrayList of LanguageDto objects representing the languages.
     */
    public ArrayList<LanguageDto> getAllLanguages() {
        return languageMapper.toDtos(languageRepository.getAllLanguages());
    }

    /**
     * Retrieves a language by its ID.
     *
     * @param id The ID of the language to retrieve.
     * @return A LanguageDto object representing the language.
     */
    public LanguageDto getLanguageById(int id) {
        return languageMapper.toDto(languageRepository.getLanguageById(id));
    }
}
