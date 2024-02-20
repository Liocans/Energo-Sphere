package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.CustomerController;
import com.PDLB.PPE.DTO.model.CustomerDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link CustomerController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(CustomerController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class CustomerControllerTest {

    private final String path = "http://localhost:8080/api/customer/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private CustomerController customerController;
    private CustomerDto customerDto, customerDto1, customerDto2;

    @BeforeEach
    public void setUp() {
        customerDto = new CustomerDto("1", "John", "Doe", "50458456278", "Lalala@Gmail.com", 1);
        customerDto1 = new CustomerDto("2", "Jane", "Doe", "0545/875205", "Lololo@Gmail.com", 1);
        customerDto2 = new CustomerDto("3", "Jano", "Doe", "0545/885205", "Lolalo@Gmail.com", 1);
    }

    /**
     * {@link CustomerController#createCustomer}
     */
    @Test
    public void createCustomer() throws Exception {

        String json = new ObjectMapper().writeValueAsString(customerDto);

        mockMvc.perform(post(path + "createCustomer")
                        .param("password","coucou")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    /**
     * {@link CustomerController#getAllCustomers}
     */
    @Test
    public void getAllCustomers() throws Exception {
        ArrayList<CustomerDto> customerList = new ArrayList<>();

        customerList.add(customerDto);
        customerList.add(customerDto1);

        when(customerController.getAllCustomers()).thenReturn(customerList);

        mockMvc.perform(get(path + "getAllCustomers"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link CustomerController#getCustomerByNameAndSurname}
     */
    @Test
    public void getCustomerByNameAndSurname() throws Exception {
        ArrayList<CustomerDto> customerListJohn = new ArrayList<>();
        ArrayList<CustomerDto> customerListJane = new ArrayList<>();

        customerListJohn.add(customerDto);
        customerListJohn.add(customerDto1);
        customerListJane.add(customerDto2);

        when(customerController.getCustomerByNameAndSurname("John", "Doe")).thenReturn(customerListJohn);
        when(customerController.getCustomerByNameAndSurname("Jane", "Doe")).thenReturn(customerListJane);

        mockMvc.perform(get(path + "getCustomerByNameAndSurname")
                        .param("name", "John")
                        .param("surname", "Doe"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[0].id").value(customerDto.getId()))
                .andExpect(jsonPath("$[1].id").value(customerDto1.getId()));

        mockMvc.perform(get(path + "getCustomerByNameAndSurname")
                        .param("name", "Jane")
                        .param("surname", "Doe"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[0].id").value(customerDto2.getId()));
    }

    /**
     * {@link CustomerController#getCustomerByEmail}
     */
    @Test
    public void getCustomerByEmail() throws Exception {

        when(customerController.getCustomerByEmail("Lalala@Gmail.com")).thenReturn(customerDto);
        when(customerController.getCustomerByEmail("Lalola@Gmail.com")).thenReturn(null);

        mockMvc.perform(get(path + "getCustomerByEmail")
                        .param("email", "Lalala@Gmail.com"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));

        mockMvc.perform(get(path + "getCustomerByEmail")
                        .param("email", "Lalola@Gmail.com"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());

    }

    /**
     * {@link CustomerController#getCustomerByPhoneNumber}
     */
    @Test
    public void getCustomerByPhoneNumber() throws Exception {

        when(customerController.getCustomerByPhoneNumber("50458456278")).thenReturn(customerDto);
        when(customerController.getCustomerByPhoneNumber("50558456278")).thenReturn(null);

        mockMvc.perform(get(path + "getCustomerByPhoneNumber")
                        .param("phoneNumber", "50458456278"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));

        mockMvc.perform(get(path + "getCustomerByPhoneNumber")
                        .param("phoneNumber", "50558456278"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());

    }

    /**
     * {@link CustomerController#getCustomerById}
     */
    @Test
    public void getCustomerById() throws Exception {

        when(customerController.getCustomerById("1")).thenReturn(customerDto);
        when(customerController.getCustomerById("2")).thenReturn(null);

        mockMvc.perform(get(path + "getCustomerById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));

        mockMvc.perform(get(path + "getCustomerById")
                        .param("id", "2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());

    }

    /**
     * {@link CustomerController#getCustomerByProviderId}
     */
    @Test
    public void getCustomerByProviderId() throws Exception {
        ArrayList<CustomerDto> customerDtos = new ArrayList<CustomerDto>();
        customerDtos.add(customerDto);
        customerDtos.add(customerDto1);

        when(customerController.getCustomerByProviderId("1", 0, 5)).thenReturn(customerDtos);

        mockMvc.perform(get(path + "getCustomerByProviderId")
                        .param("providerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link CustomerController#countCustomerByProviderId}
     */
    @Test
    public void countCustomerByProviderId() throws Exception {
        when(customerController.countCustomerByProviderId("1")).thenReturn(5);

        mockMvc.perform(get(path + "countCustomerByProviderId")
                        .param("providerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link CustomerController#getCustomerByBuildingId}
     */
    @Test
    public void getCustomerByBuildingId() throws Exception {
        when(customerController.getCustomerByBuildingId("1")).thenReturn(customerDto);

        mockMvc.perform(get(path + "getCustomerByBuildingId")
                        .param("buildingId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));
    }

    /**
     * {@link CustomerController#updateCustomer}
     */
    @Test
    public void updateCustomer() throws Exception {

        customerDto.setName("Jean");

        String json = new ObjectMapper().writeValueAsString(customerDto);

        mockMvc.perform(put(path + "updateCustomer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());

    }

    /**
     * {@link CustomerController#resetCustomerPassword}
     */
    @Test
    public void resetCustomerPassword() throws Exception {

        mockMvc.perform(put(path + "resetCustomerPassword")
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("email", customerDto.getEmail())
                        .param("password", "salut"))
                .andExpect(status().isOk());
    }

    /**
     * {@link CustomerController#deleteCustomerById}
     */
    @Test
    public void deleteCustomerById() throws Exception {
        mockMvc.perform(delete(path + "deleteCustomerById")
                        .param("id", "1"))
                .andExpect(status().isOk());
    }
}