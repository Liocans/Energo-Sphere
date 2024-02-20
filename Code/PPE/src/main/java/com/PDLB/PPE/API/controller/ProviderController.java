package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.ProviderService;
import com.PDLB.PPE.DTO.model.ProviderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to providers.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/provider")
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    /**
     * Endpoint that retrieves all providers.
     *
     * @return An ArrayList of ProviderDto objects representing the providers.
     */
    @GetMapping("/getAllProviders")
    public ArrayList<ProviderDto> getAllProviders() {
        return providerService.getAllProviders();
    }

    /**
     * Endpoint that retrieves a provider by its ID.
     *
     * @param id The ID of the provider to retrieve.
     * @return The ProviderDto object representing the provider.
     */
    @GetMapping("/getProviderById")
    public ProviderDto getProviderById(@RequestParam String id) {
        return providerService.getProviderById(id);
    }

    /**
     * Endpoint that retrieves a provider by its name.
     *
     * @param name The name of the provider to retrieve.
     * @return The ProviderDto object representing the provider.
     */
    @GetMapping("/getProviderByName")
    public ProviderDto getProviderByName(@RequestParam String name) {
        return providerService.getProviderByName(name);
    }

    /**
     * Endpoint that updates an existing provider.
     *
     * @param providerDto The ProviderDto object representing the provider to update.
     */
    @PutMapping("/updateProvider")
    public void updateProvider(@RequestBody ProviderDto providerDto) {
        providerService.updateProvider(providerDto);
    }
}


