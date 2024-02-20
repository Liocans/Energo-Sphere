package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.entity.Meter;
import com.PDLB.PPE.API.repository.MeterRepository;
import com.PDLB.PPE.DTO.mapper.MeterMapper;
import com.PDLB.PPE.DTO.model.MeterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * This service class provides methods for managing meters and their associated data.
 */
@Service
public class MeterService {

    @Autowired
    private MeterRepository meterRepository;
    @Autowired
    private EnergyTypeService energyTypeService;
    @Autowired
    private MeterMapper meterMapper;

    /**
     * Creates a new meter.
     *
     * @param meter      A MeterDto object representing the meter to be created.
     * @param buildingId The ID of the building the meter belongs to.
     * @return The id of the meter
     */
    public String createMeter(MeterDto meter, String buildingId) {
        return meterRepository.createMeter(meter.isNumeric(), meter.getValue(), buildingId, meter.getEnergyType().getId(), meter.isOpen());
    }

    /**
     * Returns all meters.
     *
     * @return An ArrayList of MeterDto objects representing all meters.
     */
    public ArrayList<MeterDto> getAllMeters() {
        return objectsCreator(meterRepository.getAllMeters());
    }

    /**
     * Returns a list of meters based on a given building ID.
     *
     * @param buildingId The ID of the building to retrieve meters for.
     * @return An ArrayList of MeterDto objects.
     */
    public ArrayList<MeterDto> getMetersByBuildingId(String buildingId) {
        return objectsCreator(meterRepository.getMetersByBuildingId(buildingId));
    }

    /**
     * Returns a list of meters based on a given wallet ID.
     *
     * @param walletId The ID of the wallet to retrieve meters for.
     * @return An ArrayList of MeterDto objects.
     */
    public ArrayList<MeterDto> getMetersByWalletId(String walletId) {
        return objectsCreator(meterRepository.getMetersByWalletId(walletId));
    }

    /**
     * Updates an existing meter.
     *
     * @param meter A MeterDto object representing the updated meter.
     */
    public void updateMeter(MeterDto meter) {
        meterRepository.updateMeter(meter.getId(), meter.isNumeric(), meter.getValue(), meter.isOpen());
    }

    /**
     * Delete a meter by their ID.
     *
     * @param id the ID of the meter to be deleted
     */
    public void deleteMeterById(String id) {
        meterRepository.deleteMeterById(id);
    }

    /**
     * Creates a list of MeterDto objects based on the provided list of meters.
     *
     * @param meters The list of meters to be converted to MeterDto objects.
     * @return An ArrayList containing MeterDto objects corresponding to the input meters.
     */
    private ArrayList<MeterDto> objectsCreator(ArrayList<Meter> meters) {
        ArrayList<MeterDto> objects = new ArrayList<>();
        for (Meter meter : meters) {
            objects.add(objectCreator(meter));
        }
        return objects;
    }

    /**
     * Creates a MeterDto object from the given Meter object and additional related data.
     *
     * @param meter The Meter object to be converted into a MeterDto.
     * @return A MeterDto object representing the input meter with additional related data.
     */
    private MeterDto objectCreator(Meter meter) {
        return meterMapper.toDto(meter, energyTypeService.getEnergyTypeById(meter.getEnergyTypeId()));
    }
}
