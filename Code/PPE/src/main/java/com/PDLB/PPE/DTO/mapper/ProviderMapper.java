package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Provider;
import com.PDLB.PPE.DTO.model.ProviderDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The ProviderMapper class provides mapping methods between Provider and ProviderDto objects.
 */
@Component
public class ProviderMapper {

    /**
     * Maps a Provider object to a ProviderDto object.
     *
     * @param provider the Provider object to be mapped
     * @return the corresponding ProviderDto object
     */
    public ProviderDto toDto(Provider provider) {
        if (provider == null)
            return null;

        return new ProviderDto(
                provider.getId(),
                provider.getName(),
                provider.getStreet(),
                provider.getNumber(),
                provider.getCity(),
                provider.getCountry(),
                provider.getZipCode(),
                provider.getLanguage()
        );
    }

    /**
     * Maps a Provider object to a ProviderDto object.
     *
     * @param providers The array with multiple Provider object to be mapped
     * @return the corresponding ProviderDto object
     */
    public ArrayList<ProviderDto> toDtos(ArrayList<Provider> providers) {
        ArrayList<ProviderDto> dtos = new ArrayList<>();
        for (Provider provider : providers) {
            dtos.add(toDto(provider));
        }
        return dtos;
    }
}
