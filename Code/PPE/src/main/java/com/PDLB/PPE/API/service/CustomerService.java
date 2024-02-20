package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.repository.CustomerRepository;
import com.PDLB.PPE.API.security.WebSecurityConfig;
import com.PDLB.PPE.DTO.mapper.CustomerMapper;
import com.PDLB.PPE.DTO.model.CustomerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

/**
 * This service class provides methods for managing customers and their associated data.
 */
@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerMapper customerMapper;

    /**
     * Create a new customer.
     *
     * @param customer the customer to be created
     * @return The id of the customer
     */
    public String createCustomer(CustomerDto customer, String password) {
        return customerRepository.createCustomer(customer.getName(), customer.getSurname(), customer.getPhoneNumber(), customer.getEmail(), customer.getLanguage(), WebSecurityConfig.passwordEncoder().encode(password).toString());
    }

    /**
     * Get all customers.
     *
     * @return a list of all customers
     */
    public ArrayList<CustomerDto> getAllCustomers() {
        return customerMapper.toDtos(customerRepository.getAllCustomers());
    }

    /**
     * Get customer by their name and surname.
     *
     * @param name    the name of the customer
     * @param surname the surname of the customer
     * @return a list of customers with the given name and surname
     */
    public ArrayList<CustomerDto> getCustomerByNameAndSurname(String name, String surname) {
        return customerMapper.toDtos(customerRepository.getCustomerByNameAndSurname(name, surname));
    }

    /**
     * Get a customer by their email address.
     *
     * @param email the email address of the customer
     * @return the customer with the given email address
     */
    public CustomerDto getCustomerByEmail(String email) {
        return customerMapper.toDto(customerRepository.getCustomerByEmail(email));
    }

    /**
     * Get a customer by their phone number.
     *
     * @param phoneNumber the phone number of the customer
     * @return the customer with the given phone number
     */
    public CustomerDto getCustomerByPhoneNumber(String phoneNumber) {
        return customerMapper.toDto(customerRepository.getCustomerByPhoneNumber(phoneNumber));
    }

    /**
     * Get a customer by their ID.
     *
     * @param id the ID of the customer
     * @return the customer with the given ID
     */
    public CustomerDto getCustomerById(String id) {
        return customerMapper.toDto(customerRepository.getCustomerById(id));
    }

    /**
     * Get customers by provider ID.
     *
     * @param providerId the provider ID
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of customers associated with the given provider ID
     */
    public ArrayList<CustomerDto> getCustomerByProviderId(String providerId, int offset, int limit) {
        return customerMapper.toDtos(customerRepository.getCustomerByProviderId(providerId, offset, limit));
    }

    /**
     * Get count all the customers in the database for a given provider
     *
     * @param providerId
     * @return
     */
    public int countCustomerByProviderId(@RequestParam String providerId) {
        return customerRepository.countCustomerByProviderId(providerId);
    }

    /**
     * Get a customer by building ID.
     *
     * @param buildingId the building ID
     * @return the customer associated with the given building ID
     */
    public CustomerDto getCustomerByBuildingId(String buildingId) {
        return customerMapper.toDto(customerRepository.getCustomerByBuildingId(buildingId));
    }

    /**
     * Update a customer.
     *
     * @param customer the updated customer information
     */
    public void updateCustomer(CustomerDto customer) {
        customerRepository.updateCustomer(customer.getId(), customer.getName(), customer.getSurname(), customer.getPhoneNumber(), customer.getEmail(), customer.getLanguage());
    }

    /**
     * Create a new customer.
     *
     * @param email the customer email
     * @param password the password
     */
    public void resetCustomerPassword(String email, String password) {
        customerRepository.resetCustomerPassword(email, WebSecurityConfig.passwordEncoder().encode(password).toString());
    }

    /**
     * Delete a customer by their ID.
     *
     * @param id the ID of the customer to be deleted
     */
    public void deleteCustomerById(String id) {
        customerRepository.deleteCustomerById(id);
    }


}
