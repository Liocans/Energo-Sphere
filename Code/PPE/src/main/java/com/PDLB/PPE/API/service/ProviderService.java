package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.ProviderRepository;
import com.PDLB.PPE.DTO.mapper.ProviderMapper;
import com.PDLB.PPE.DTO.model.ProviderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing providers and their associated data.
 */
@Service
public class ProviderService {

    @Autowired
    private ProviderRepository providerRepository;
    @Autowired
    private ProviderMapper providerMapper;

    /**
     * Retrieves all providers.
     *
     * @return An ArrayList of ProviderDto objects representing the providers.
     */
    public ArrayList<ProviderDto> getAllProviders() {
        return providerMapper.toDtos(providerRepository.getAllProviders());
    }

    /**
     * Retrieves a provider by its ID.
     *
     * @param id The ID of the provider to retrieve.
     * @return The ProviderDto object representing the provider.
     */
    public ProviderDto getProviderById(String id) {
        return providerMapper.toDto(providerRepository.getProviderById(id));
    }

    /**
     * Retrieves a provider by its name.
     *
     * @param name The name of the provider to retrieve.
     * @return The ProviderDto object representing the provider.
     */
    public ProviderDto getProviderByName(String name) {
        return providerMapper.toDto(providerRepository.getProviderByName(name));
    }

    /**
     * Updates an existing provider.
     *
     * @param providerDto The ProviderDto object representing the provider to update.
     */
    public void updateProvider(ProviderDto providerDto) {
        providerRepository.updateProvider(providerDto.getId(), providerDto.getName(), providerDto.getStreet(), providerDto.getNumber(), providerDto.getCity(), providerDto.getCountry(), providerDto.getZipCode(), providerDto.getLanguage());
    }


}
