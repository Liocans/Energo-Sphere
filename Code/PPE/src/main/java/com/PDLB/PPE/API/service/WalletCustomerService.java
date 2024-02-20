package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.WalletCustomerRepository;
import com.PDLB.PPE.DTO.mapper.WalletCustomerMapper;
import com.PDLB.PPE.DTO.model.WalletCustomerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing wallet customers and their associated data.
 */
@Service
public class WalletCustomerService {

    @Autowired
    private WalletCustomerRepository walletCustomerRepository;

    @Autowired
    private WalletCustomerMapper walletCustomerMapper;

    /**
     * Creates a new walletCustomer.
     *
     * @param walletId the id of the wallet
     * @param customerId the customer id
     * @param privilege the privilege
     * @return The id of the wallet.
     */
    public int createWalletCustomer(String walletId, String customerId, int privilege) {
        return walletCustomerRepository.createWalletCustomer(walletId, customerId, privilege);
    }

    /**
     * Retrieves all wallet customers linked to a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve linked customers for.
     * @return An ArrayList of WalletCustomerDto objects representing the linked customers.
     */
    public ArrayList<WalletCustomerDto> getWalletCustomerByWalletId(String walletId) {
        return walletCustomerMapper.toDtos(walletCustomerRepository.getWalletCustomerByWalletId(walletId));
    }
}
