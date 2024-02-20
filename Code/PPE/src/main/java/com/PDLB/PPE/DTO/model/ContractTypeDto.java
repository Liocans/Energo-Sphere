package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a contract type.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: an integer representing the unique identifier of the contract type.</li>
 *     <li>value: a string representing the value of the contract type.</li>
 * </ul>
 */
public class ContractTypeDto {

    private int id;
    private String value;

    /**
     * Constructs an empty ContractTypeDto object.
     */
    public ContractTypeDto() {
    }

    /**
     * Constructs a ContractTypeDto object with the specified id and value.
     *
     * @param id    an integer representing the unique identifier of the contract type.
     * @param value a string representing the value of the contract type.
     */
    public ContractTypeDto(int id, String value) {
        this.id = id;
        this.value = value;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "ContractTypeDto{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
