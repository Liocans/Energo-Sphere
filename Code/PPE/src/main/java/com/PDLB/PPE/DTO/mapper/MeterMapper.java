package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Meter;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import com.PDLB.PPE.DTO.model.MeterDto;
import org.springframework.stereotype.Component;

/**
 * The MeterMapper class provides mapping methods between Meter and MeterDto objects.
 */
@Component
public class MeterMapper {

    /**
     * Maps a Meter object to a MeterDto object.
     *
     * @param meter the Meter object to be mapped
     * @return the corresponding MeterDto object
     */
    public MeterDto toDto(Meter meter, EnergyTypeDto energyTypeDto) {
        if (meter == null)
            return null;

        return new MeterDto(
                meter.getId(),
                meter.isNumeric(),
                meter.getValue(),
                energyTypeDto,
                meter.isOpen());
    }
}
