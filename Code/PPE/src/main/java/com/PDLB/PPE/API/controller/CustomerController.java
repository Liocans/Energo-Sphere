package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.CustomerService;
import com.PDLB.PPE.DTO.model.CustomerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allow us to use the different path to call specifiy method link to customer
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/customer")
public class CustomerController {


    @Autowired
    private CustomerService customerService;

    /**
     * Endpoint to create a new customer.
     *
     * @param customer the customer to be created
     * @return The id of the customer
     */
    @PostMapping("/createCustomer")
    @ResponseStatus(HttpStatus.CREATED)
    public String createCustomer(@RequestBody CustomerDto customer, @RequestParam(defaultValue = "Customer") String password) {
        return customerService.createCustomer(customer, password);
    }

    /**
     * Endpoint to get all customers.
     *
     * @return a list of all customers
     */
    @GetMapping("/getAllCustomers")
    public ArrayList<CustomerDto> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    /**
     * Endpoint to get a customer by their name and surname.
     *
     * @param name    the name of the customer
     * @param surname the surname of the customer
     * @return a list of customers with the given name and surname
     */
    @GetMapping("/getCustomerByNameAndSurname")
    public ArrayList<CustomerDto> getCustomerByNameAndSurname(@RequestParam String name, @RequestParam String surname) {
        return customerService.getCustomerByNameAndSurname(name, surname);
    }

    /**
     * Endpoint to get a customer by their email address.
     *
     * @param email the email address of the customer
     * @return the customer with the given email address
     */
    @GetMapping("/getCustomerByEmail")
    public CustomerDto getCustomerByEmail(@RequestParam String email) {
        return customerService.getCustomerByEmail(email);
    }

    /**
     * Endpoint to get a customer by their phone number.
     *
     * @param phoneNumber the phone number of the customer
     * @return the customer with the given phone number
     */
    @GetMapping("/getCustomerByPhoneNumber")
    public CustomerDto getCustomerByPhoneNumber(@RequestParam String phoneNumber) {
        return customerService.getCustomerByPhoneNumber(phoneNumber);
    }

    /**
     * Endpoint to get a customer by their ID.
     *
     * @param id the ID of the customer
     * @return the customer with the given ID
     */
    @GetMapping("/getCustomerById")
    public CustomerDto getCustomerById(@RequestParam String id) {
        return customerService.getCustomerById(id);
    }

    /**
     * Endpoint to get customers by provider ID.
     *
     * @param providerId the provider ID
     * @param offset     The record number where pagination is done
     * @param limit      The number of object return
     * @return a list of customers associated with the given provider ID
     */
    @GetMapping("/getCustomerByProviderId")
    public ArrayList<CustomerDto> getCustomerByProviderId(@RequestParam String providerId, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "5") int limit) {
        return customerService.getCustomerByProviderId(providerId, offset, limit);
    }

    /**
     * Endpoint to get count all the customers in the database for a given provider
     *
     * @param providerId
     * @return
     */
    @GetMapping("/countCustomerByProviderId")
    public int countCustomerByProviderId(@RequestParam String providerId){
        return customerService.countCustomerByProviderId(providerId);
    }


    /**
     * Endpoint to get a customer by building ID.
     *
     * @param buildingId the building ID
     * @return the customer associated with the given building ID
     */
    @GetMapping("/getCustomerByBuildingId")
    public CustomerDto getCustomerByBuildingId(@RequestParam String buildingId) {
        return customerService.getCustomerByBuildingId(buildingId);
    }

    /**
     * Endpoint to update a customer.
     *
     * @param customer the updated customer information
     */
    @PutMapping("/updateCustomer")
    public void updateCustomer(@RequestBody CustomerDto customer) {
        customerService.updateCustomer(customer);
    }

    /**
     * Endpoint to create a new customer.
     *
     * @param email the customer email
     * @param password the password
     */
    @PutMapping("/resetCustomerPassword")
    public void resetCustomerPassword(@RequestParam String email, @RequestParam String password) {
        customerService.resetCustomerPassword(email, password);
    }

    /**
     * Endpoint to delete a customer by their ID.
     *
     * @param id the ID of the customer to be deleted
     */
    @DeleteMapping("/deleteCustomerById")
    public void deleteCustomerById(@RequestParam String id) {

        customerService.deleteCustomerById(id);
    }

}
