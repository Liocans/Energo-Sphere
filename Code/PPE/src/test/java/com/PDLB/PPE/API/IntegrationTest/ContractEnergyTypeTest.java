package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.ContractEnergyTypeController;
import com.PDLB.PPE.DTO.model.ContractEnergyTypeDto;
import com.fasterxml.jackson.databind.ObjectMapper;
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link ContractEnergyTypeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ContractEnergyTypeTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static ContractEnergyTypeDto contractEnergyTypeDto;



    @BeforeAll
    public static void setUp() {
        contractEnergyTypeDto = new ContractEnergyTypeDto(50, 50, 1);
    }

    @BeforeEach
    public void setUp2() {
        path = "http://localhost:" + port + "/api/contractEnergyType/";
    }

    /**
     * {@link ContractEnergyTypeController#createContractEnergyType}
     */
    @Test
    @Order(1)
    public void createContractEnergyType() throws Exception {

        response = mockMvc.perform(post(path + "createContractEnergyType")
                        .content(new ObjectMapper().writeValueAsString(contractEnergyTypeDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("contractId","C00000005"))
                .andExpect(status().isCreated())
                .andReturn();

        contractEnergyTypeDto.setId(Integer.parseInt(response.getResponse().getContentAsString()));
    }

    /**
     * {@link ContractEnergyTypeController#getAllContractEnergyTypes}
     */
    @Test
    @Order(2)
    public void getAllContractEnergyTypes() throws Exception {

        mockMvc.perform(get(path + "getAllContractEnergyTypes"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractEnergyTypeController#getContractEnergyTypeById}
     */
    @Test
    @Order(3)
    public void getContractEnergyTypeById() throws Exception {

        mockMvc.perform(get(path + "getContractEnergyTypeById")
                        .param("id", String.valueOf(contractEnergyTypeDto.getId())))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link ContractEnergyTypeController#getContractEnergyTypeByContractId}
     */
    @Test
    @Order(4)
    public void getContractEnergyTypeByContractId() throws Exception {

        mockMvc.perform(get(path + "getContractEnergyTypeByContractId")
                        .param("contractId", "C00000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractEnergyTypeController#updateContractEnergyType}
     */
    @Test
    @Order(5)
    public void updateContractEnergyType() throws Exception {

        contractEnergyTypeDto.setDayPrice(70);

        mockMvc.perform(put(path + "updateContractEnergyType")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(contractEnergyTypeDto)))
                .andExpect(status().isOk());

    }

    /**
     * {@link ContractEnergyTypeController#deleteContractEnergyTypeById}
     */
    @Test
    @Order(6)
    public void deleteContractEnergyTypeById() throws Exception {

        mockMvc.perform(delete(path + "deleteContractEnergyTypeById")
                        .param("id", String.valueOf(contractEnergyTypeDto.getId())))
                .andExpect(status().isOk());
    }
}
