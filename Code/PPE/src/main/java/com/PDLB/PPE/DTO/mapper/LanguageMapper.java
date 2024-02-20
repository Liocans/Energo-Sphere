package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Language;
import com.PDLB.PPE.DTO.model.LanguageDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The LanguageMapper class provides mapping methods between Language and LanguageDto objects.
 */
@Component
public class LanguageMapper {

    /**
     * Maps a Language object to an LanguageDto object.
     *
     * @param language The Language object to be mapped.
     * @return The corresponding LanguageDto object.
     */
    public LanguageDto toDto(Language language) {
        if (language == null)
            return null;

        return new LanguageDto(
                language.getId(),
                language.getValue()
        );
    }

    /**
     * Maps an ArrayList of Language objects to an ArrayList of LanguageDto objects.
     *
     * @param languages the ArrayList of Language objects to be mapped
     * @return the corresponding ArrayList of LanguageDto objects
     */
    public ArrayList<LanguageDto> toDtos(ArrayList<Language> languages) {
        ArrayList<LanguageDto> dtos = new ArrayList<>();
        for (Language language : languages) {
            dtos.add(toDto(language));
        }
        return dtos;
    }
}
