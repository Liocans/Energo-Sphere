package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.entity.Wallet;
import com.PDLB.PPE.API.repository.WalletRepository;
import com.PDLB.PPE.DTO.mapper.WalletMapper;
import com.PDLB.PPE.DTO.model.WalletDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing wallets and their associated data.
 */
@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private WalletCustomerService walletCustomerService;
    @Autowired
    private WalletMapper walletMapper;
    @Autowired
    private BuildingService buildingService;
    @Autowired
    private MeterService meterService;
    @Autowired
    private PrivilegeService privilegeService;

    /**
     * Creates a new wallet.
     *
     * @param buildingId The building id
     * @param customerId the customer id
     * @return The id of the wallet.
     */
    public String createWallet(String buildingId, String customerId) {
        String walletId = walletRepository.createWallet(buildingId);
        walletCustomerService.createWalletCustomer(walletId, customerId, 1);
        return walletId;
    }

    /**
     * Retrieves all wallets.
     *
     * @return An ArrayList of WalletDto objects representing the wallets.
     */
    public ArrayList<WalletDto> getAllWallets() {
        return objectsCreator(walletRepository.getAllWallets(), null);
    }

    /**
     * Retrieves a wallet by its ID.
     *
     * @param id The ID of the wallet to retrieve.
     * @return A WalletDto object representing the wallet.
     */
    public WalletDto getWalletById(String id) {
        return objectCreator(walletRepository.getWalletById(id), null);
    }

    /**
     * Retrieves all wallets for a given customer ID.
     *
     * @param customerId The ID of the customer to retrieve wallets for.
     * @return An ArrayList of WalletDto objects representing the wallets.
     */
    public ArrayList<WalletDto> getWalletByCustomerId(String customerId, int offset, int limit) {
        return objectsCreator(walletRepository.getWalletByCustomerId(customerId, offset, limit), customerId);
    }

    /**
     * Retrieves the count of wallets associated with a specific customer.
     *
     * @param customerId The ID of the customer for whom wallets are counted.
     * @return The count of wallets associated with the specified customer.
     */
    public int countWalletByCustomerId(String customerId) {
        return walletRepository.countWalletByCustomerId(customerId);
    }

    /**
     * Creates a list of WalletDto objects based on the provided list of wallets and customer ID.
     *
     * @param wallets     The list of wallets to be converted to WalletDto objects.
     * @param customerId  The ID of the customer associated with the wallets, or null if not applicable.
     * @return An ArrayList containing WalletDto objects corresponding to the input wallets.
     */
    private ArrayList<WalletDto> objectsCreator(ArrayList<Wallet> wallets, String customerId) {
        ArrayList<WalletDto> objects = new ArrayList<>();
        for (Wallet wallet : wallets) {
            objects.add(objectCreator(wallet, customerId));
        }
        return objects;
    }

    /**
     * Creates a WalletDto object from the given Wallet object, customer ID, and additional related data.
     *
     * @param wallet      The Wallet object to be converted into a WalletDto.
     * @param customerId  The ID of the customer associated with the wallet, or null if not applicable.
     * @return A WalletDto object representing the input wallet with additional related data.
     */
    private WalletDto objectCreator(Wallet wallet, String customerId) {
        String privilege = null;
        if(customerId != null)
            privilege = privilegeService.getPrivilegeByCustomerIdAndWalletId(customerId, wallet.getId()).getValue();

        return walletMapper.toDto(
                wallet,
                buildingService.getBuildingById(wallet.getBuildingId()).getAddress(),
                privilege
        );
    }


}
