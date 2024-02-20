package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.ContractController;
import com.PDLB.PPE.DTO.model.ContractDto;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.time.LocalDate;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link ContractController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ContractControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static ContractDto contractDto;




    @BeforeAll
    public static void setUp() {
        contractDto = new ContractDto(LocalDate.now(), LocalDate.now().plusYears(1), "P0000000000009", new ContractTypeDto(1, "variable"), "H0000000000001");
    }

    @BeforeEach
    public void setUp2() {
        path = "http://localhost:" + port + "/api/contract/";
    }

    /**
     * {@link ContractController#createContract}
     */
    @Test
    @Order(1)
    public void createContract() throws Exception {

        response = mockMvc.perform(post(path + "createContract")
                        .content(new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(contractDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andReturn();

        contractDto.setId(response.getResponse().getContentAsString());
    }

    /**
     * {@link ContractController#getAllContracts}
     */
    @Test
    @Order(2)
    public void getAllContracts() throws Exception {

        mockMvc.perform(get(path + "getAllContracts"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractController#getContractById}
     */
    @Test
    @Order(3)
    public void getContractById() throws Exception {

        mockMvc.perform(get(path + "getContractById")
                        .param("id", contractDto.getId()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link ContractController#getContractByProviderId}
     */
    @Test
    @Order(4)
    public void getContractByProviderId() throws Exception {

        mockMvc.perform(get(path + "getContractByProviderId")
                        .param("providerId", "P0000000000009"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractController#countContractByProviderId}
     */
    @Test
    @Order(5)
    public void countContractByProviderId() throws Exception {

        mockMvc.perform(get(path + "countContractByProviderId")
                        .param("providerId", "P0000000000009"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link ContractController#getContractByCustomerId}
     */
    @Test
    @Order(6)
    public void getContractByCustomerId() throws Exception {

        mockMvc.perform(get(path + "getContractByCustomerId")
                        .param("customerId", "U0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractController#countContractByCustomerId}
     */
    @Test
    @Order(7)
    public void countContractByCustomerId() throws Exception {

        mockMvc.perform(get(path + "countContractByCustomerId")
                        .param("customerId", "U0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link ContractController#updateContract}
     */
    @Test
    @Order(8)
    public void updateContract() throws Exception {
        contractDto.setEndDate(contractDto.getEndDate().plusYears(1));

        mockMvc.perform(put(path + "updateContract")
                        .content(new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(contractDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    /**
     * {@link ContractController#deleteContractById}
     */
    @Test
    @Order(9)
    public void deleteContractById() throws Exception {

        mockMvc.perform(delete(path + "deleteContractById")
                        .param("id", contractDto.getId())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}