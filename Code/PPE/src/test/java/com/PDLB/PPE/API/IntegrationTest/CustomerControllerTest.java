package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.CustomerController;
import com.PDLB.PPE.API.security.WebSecurityConfig;
import com.PDLB.PPE.DTO.model.CustomerDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link CustomerController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class CustomerControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static CustomerDto customerDto, customerDto1;

    @BeforeAll
    public static void setUp() {
        customerDto = new CustomerDto("John", "Doe", "50458456278", "Lalala@Gmail.com", 1);
        customerDto1 = new CustomerDto("Jane", "Lane", "50458456288", "Jaja@Gmail.com", 1);

    }

    @BeforeEach
    public void setUp2() {
        path = "http://localhost:" + port + "/api/customer/";
    }

    /**
     * {@link CustomerController#createCustomer}
     */
    @Test
    @Order(1)
    public void createCustomer() throws Exception {

        response = mockMvc.perform(post(path + "createCustomer")
                        .content(new ObjectMapper().writeValueAsString(customerDto))
                        .param("password","coucou")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andReturn();

        customerDto.setId(response.getResponse().getContentAsString());

        response = mockMvc.perform(post(path + "createCustomer")
                        .content(new ObjectMapper().writeValueAsString(customerDto1))
                        .param("password","coucou")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andReturn();

        customerDto1.setId(response.getResponse().getContentAsString());
    }

    /**
     * {@link CustomerController#getAllCustomers}
     */
    @Test
    @Order(2)
    public void getAllCustomers() throws Exception {

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
    @Order(3)
    public void getCustomerByNameAndSurname() throws Exception {

        mockMvc.perform(get(path + "getCustomerByNameAndSurname")
                        .param("name", customerDto.getName())
                        .param("surname", customerDto.getSurname()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[0].id").value(customerDto.getId()));

    }

    /**
     * {@link CustomerController#getCustomerByEmail}
     */
    @Test
    @Order(4)
    public void getCustomerByEmail() throws Exception {

        mockMvc.perform(get(path + "getCustomerByEmail")
                        .param("email", customerDto.getEmail()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));
    }

    /**
     * {@link CustomerController#getCustomerByPhoneNumber}
     */
    @Test
    @Order(5)
    public void getCustomerByPhoneNumber() throws Exception {

        mockMvc.perform(get(path + "getCustomerByPhoneNumber")
                        .param("phoneNumber", customerDto.getPhoneNumber()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));
    }

    /**
     * {@link CustomerController#getCustomerById}
     */
    @Test
    @Order(6)
    public void getCustomerById() throws Exception {

        mockMvc.perform(get(path + "getCustomerById")
                        .param("id", customerDto.getId()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(customerDto.getId()));
    }

    /**
     * {@link CustomerController#getCustomerByProviderId}
     */
    @Test
    @Order(7)
    public void getCustomerByProviderId() throws Exception {

        mockMvc.perform(get(path + "getCustomerByProviderId")
                        .param("providerId", "P0000000000009"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link CustomerController#countCustomerByProviderId}
     */
    @Test
    @Order(8)
    public void countCustomerByProviderId() throws Exception {

        mockMvc.perform(get(path + "countCustomerByProviderId")
                        .param("providerId", "P0000000000009"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link CustomerController#getCustomerByBuildingId}
     */
    @Test
    @Order(9)
    public void getCustomerByBuildingId() throws Exception {

        mockMvc.perform(get(path + "getCustomerByBuildingId")
                        .param("buildingId", "H0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("U0000000000003"));
    }

    /**
     * {@link CustomerController#updateCustomer}
     */
    @Test
    @Order(10)
    public void updateCustomer() throws Exception {
        customerDto.setName("Jean");

        mockMvc.perform(put(path + "updateCustomer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(customerDto)))
                .andExpect(status().isOk());
    }

    /**
     * {@link CustomerController#resetCustomerPassword}
     */
    @Test
    @Order(11)
    public void resetCustomerPassword() throws Exception {

        mockMvc.perform(put(path + "resetCustomerPassword")
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("email", customerDto.getEmail())
                        .param("password", WebSecurityConfig.passwordEncoder().encode("salut").toString()))
                .andExpect(status().isOk());
    }

    /**
     * {@link CustomerController#deleteCustomerById}
     */
    @Test
    @Order(12)
    public void deleteCustomerById() throws Exception {

        mockMvc.perform(delete(path + "deleteCustomerById")
                        .param("id", customerDto.getId()))
                .andExpect(status().isOk());

        mockMvc.perform(delete(path + "deleteCustomerById")
                        .param("id", customerDto1.getId()))
                .andExpect(status().isOk());
    }
}