package com.PDLB.PPE.DTO.model;

/**
 * A data transfer object (DTO) representing a role.
 *
 * <p>Properties:</p>
 * <ul>
 *     <li>id: The unique identifier for the role.</li>
 *     <li>value: The value of the role.</li>
 * </ul>
 */
public class RoleDto {

    private int id;
    private String value;

    /**
     * Constructs an empty RoleDto object.
     */
    public RoleDto() {
    }

    /**
     * Constructs a RoleDto object with the specified ID and value.
     *
     * @param id    The ID of the role.
     * @param value The value of the role.
     */
    public RoleDto(int id, String value) {
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
        return "Role{" +
                "id=" + id +
                ", value='" + value + '\'' +
                '}';
    }
}
