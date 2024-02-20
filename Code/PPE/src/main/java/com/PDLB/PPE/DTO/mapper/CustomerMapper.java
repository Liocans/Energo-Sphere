package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.Customer;
import com.PDLB.PPE.DTO.model.CustomerDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * The CustomerMapper class provides mapping methods between Customer and CustomerDto objects.
 */
@Component
public class CustomerMapper {

    /**
     * Maps a Customer object to a CustomerDto object.
     *
     * @param customer The Customer object to be mapped.
     * @return The corresponding CustomerDto object.
     */
    public CustomerDto toDto(Customer customer) {
        if (customer == null)
            return null;

        return new CustomerDto(
                customer.getId(),
                customer.getName(),
                customer.getSurname(),
                customer.getPhoneNumber(),
                customer.getEmail(),
                customer.getLanguage()
        );
    }

    /**
     * Maps a Customer object to a CustomerDto object.
     *
     * @param customers The array with multiple Customer object to be mapped
     * @return The corresponding CustomerDto object.
     */
    public ArrayList<CustomerDto> toDtos(ArrayList<Customer> customers) {
        ArrayList<CustomerDto> dtos = new ArrayList<>();
        for (Customer customer : customers) {
            dtos.add(toDto(customer));
        }
        return dtos;
    }
}
