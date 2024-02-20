package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.WalletCustomer;
import com.PDLB.PPE.DTO.model.WalletCustomerDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The WalletCustomerMapper class provides mapping methods between WalletCustomer and WalletCustomerDto objects.
 */
@Component
public class WalletCustomerMapper {

    /**
     * Maps a WalletCustomer object to a WalletCustomerDto object.
     *
     * @param walletCustomer the WalletCustomer object to map
     * @return a WalletCustomerDto object containing the same data as the input WalletCustomer object
     */
    public WalletCustomerDto toDto(WalletCustomer walletCustomer) {
        if (walletCustomer == null)
            return null;

        return new WalletCustomerDto(
                walletCustomer.getId(),
                walletCustomer.getPrivilegeId(),
                walletCustomer.getCustomerId()
        );
    }

    /**
     * Maps a WalletCustomer object to a WalletCustomerDto object.
     *
     * @param walletCustomers The array with multiple WalletCustomer object to be mapped
     * @return a WalletCustomerDto object containing the same data as the input WalletCustomer object
     */
    public ArrayList<WalletCustomerDto> toDtos(ArrayList<WalletCustomer> walletCustomers) {
        ArrayList<WalletCustomerDto> dtos = new ArrayList<>();
        for (WalletCustomer walletCustomer : walletCustomers) {
            dtos.add(toDto(walletCustomer));
        }
        return dtos;
    }

}
