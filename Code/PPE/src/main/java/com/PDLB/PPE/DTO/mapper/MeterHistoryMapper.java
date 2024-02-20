package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.MeterHistory;
import com.PDLB.PPE.DTO.model.MeterHistoryDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The MeterHistoryMapper class provides mapping methods between MeterHistory and MeterHistoryDto objects.
 */
@Component
public class MeterHistoryMapper {

    /**
     * Maps a MeterHistory object to a MeterHistoryDto object.
     *
     * @param meterHistory the MeterHistory object to be mapped
     * @return the corresponding MeterHistoryDto object
     */
    public MeterHistoryDto toDto(MeterHistory meterHistory) {
        if (meterHistory == null)
            return null;

        return new MeterHistoryDto(
                meterHistory.getId(),
                meterHistory.getDate(),
                meterHistory.getValue()
        );
    }

    /**
     * Maps an ArrayList of MeterHistory objects to an ArrayList of MeterHistoryDto objects.
     *
     * @param meterHistories the ArrayList of MeterHistory objects to be mapped
     * @return the corresponding ArrayList of MeterHistoryDto objects
     */
    public ArrayList<MeterHistoryDto> toDtos(ArrayList<MeterHistory> meterHistories) {
        ArrayList<MeterHistoryDto> dtos = new ArrayList<>();
        for (MeterHistory meterHistory : meterHistories) {
            dtos.add(toDto(meterHistory));
        }
        return dtos;
    }
}
