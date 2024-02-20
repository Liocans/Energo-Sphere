package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a walletMeter.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: the ID of the wallet meter</li>
 *     <li>wallet: the ID of the wallet that the meter belongs to</li>
 *     <li>meter: the ID of the meter</li>
 * </ul>
 */
public class WalletMeterDto {

    private int id;
    private String wallet;
    private String meter;

    /**
     * Constructs an empty WalletMeterDto object.
     */
    public WalletMeterDto() {
    }

    /**
     * Constructs a new WalletMeterDto object.
     *
     * @param id     the ID of the wallet meter
     * @param wallet the ID of the wallet that the meter belongs to
     * @param meter  the ID of the meter
     */
    public WalletMeterDto(int id, String wallet, String meter) {
        this.id = id;
        this.wallet = wallet;
        this.meter = meter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWallet() {
        return wallet;
    }

    public void setWallet(String wallet) {
        this.wallet = wallet;
    }

    public String getMeter() {
        return meter;
    }

    public void setMeter(String meter) {
        this.meter = meter;
    }

    @Override
    public String toString() {
        return "WalletMeterDto{" +
                "id=" + id +
                ", wallet='" + wallet + '\'' +
                ", meter='" + meter + '\'' +
                '}';
    }
}
