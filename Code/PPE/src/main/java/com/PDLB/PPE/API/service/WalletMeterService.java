package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.WalletMeterRepository;
import com.PDLB.PPE.DTO.mapper.WalletMeterMapper;
import com.PDLB.PPE.DTO.model.WalletMeterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This service class provides methods for managing wallet meters and their associated data.
 */
@Service
public class WalletMeterService {

    @Autowired
    private WalletMeterRepository walletMeterRepository;
    @Autowired
    private WalletMeterMapper walletMeterMapper;

    /**
     * Create a new walletMeter
     *
     * @param walletId The ID of the wallet
     * @param meterId The ID of the meter
     * @return id of the new record
     */
    public int createWalletMeter(String walletId, String meterId) {
        return walletMeterRepository.createWalletMeter(walletId, meterId);
    }

    /**
     * Retrieves all wallet meter records for a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve meter records for.
     * @return An ArrayList of WalletMeterDto objects representing the wallet meter records.
     */
    public ArrayList<WalletMeterDto> getWalletMeterByWalletId(@RequestParam String walletId) {
        return walletMeterMapper.toDtos(walletMeterRepository.getWalletMeterByWalletId(walletId));
    }

}
