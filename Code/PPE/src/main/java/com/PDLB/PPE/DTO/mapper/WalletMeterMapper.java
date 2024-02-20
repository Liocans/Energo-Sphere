package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.WalletMeter;
import com.PDLB.PPE.DTO.model.WalletMeterDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The WalletMeterMapper class provides mapping methods between WalletMeter and WalletMeterDto objects.
 */
@Component
public class WalletMeterMapper {

    /**
     * Maps a WalletMeter object to a WalletMeterDto object.
     *
     * @param walletMeter the WalletMeter object to map
     * @return a WalletMeterDto object containing the same data as the input WalletMeter object
     */
    public WalletMeterDto toDto(WalletMeter walletMeter) {
        if (walletMeter == null)
            return null;

        return new WalletMeterDto(
                walletMeter.getId(),
                walletMeter.getWalletId(),
                walletMeter.getMeterId()
        );
    }

    /**
     * Maps a WalletMeter object to a WalletMeterDto object.
     *
     * @param walletMeters the WalletMeter object to map
     * @return a WalletMeterDto object containing the same data as the input WalletMeter object
     */
    public ArrayList<WalletMeterDto> toDtos(ArrayList<WalletMeter> walletMeters) {
        ArrayList<WalletMeterDto> dtos = new ArrayList<>();
        for (WalletMeter walletMeter : walletMeters) {
            dtos.add(toDto(walletMeter));
        }
        return dtos;
    }
}
