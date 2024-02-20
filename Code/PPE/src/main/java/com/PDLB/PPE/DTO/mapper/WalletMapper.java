package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Wallet;
import com.PDLB.PPE.DTO.model.WalletDto;
import org.springframework.stereotype.Component;

/**
 * The WalletMapper class provides mapping methods between Wallet and WalletDto objects.
 */
@Component
public class WalletMapper {

    /**
     * Maps a Wallet object to a WalletDto object.
     *
     * @param wallet            the Wallet object to map
     * @param buildingAddress   the address of the building to which the Wallet belongs
     * @param customerPrivilege the privilege level of the Wallet's primary customer
     * @return a WalletDto object containing the same data as the input Wallet object
     */
    public WalletDto toDto(Wallet wallet, String buildingAddress, String customerPrivilege) {
        if (wallet == null)
            return null;

        return new WalletDto(
                wallet.getId(),
                wallet.getBuildingId(),
                buildingAddress,
                customerPrivilege
        );
    }
}
