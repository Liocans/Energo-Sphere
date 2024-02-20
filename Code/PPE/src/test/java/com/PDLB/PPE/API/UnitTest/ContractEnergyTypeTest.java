package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.ContractEnergyTypeController;
import com.PDLB.PPE.DTO.model.ContractEnergyTypeDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
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

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link ContractEnergyTypeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ContractEnergyTypeController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ContractEnergyTypeTest {

    private final String path = "http://localhost:8080/api/contractEnergyType/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ContractEnergyTypeController contractEnergyTypeController;
    private ContractEnergyTypeDto contractEnergyTypeDto, contractEnergyTypeDto1;

    @BeforeEach
    public void setUp() {
        contractEnergyTypeDto = new ContractEnergyTypeDto(1, 50, 50, 1);
        contractEnergyTypeDto1 = new ContractEnergyTypeDto(2, 50, 50, 2);
    }

    /**
     * {@link ContractEnergyTypeController#createContractEnergyType}
     */
    @Test
    public void createContractEnergyType() throws Exception {
        String json = new ObjectMapper().writeValueAsString(contractEnergyTypeDto);

        mockMvc.perform(post(path + "createContractEnergyType")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("contractId","1"))
                .andExpect(status().isCreated());
    }

    /**
     * {@link ContractEnergyTypeController#getAllContractEnergyTypes}
     */
    @Test
    public void getAllContractEnergyTypes() throws Exception {
        ArrayList<ContractEnergyTypeDto> contractEnergyTypeDtos = new ArrayList<>();

        contractEnergyTypeDtos.add(contractEnergyTypeDto);
        contractEnergyTypeDtos.add(contractEnergyTypeDto1);

        when(contractEnergyTypeController.getAllContractEnergyTypes()).thenReturn(contractEnergyTypeDtos);

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
    public void getContractEnergyTypeById() throws Exception {

        when(contractEnergyTypeController.getContractEnergyTypeById(1)).thenReturn(contractEnergyTypeDto);

        mockMvc.perform(get(path + "getContractEnergyTypeById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link ContractEnergyTypeController#getContractEnergyTypeByContractId}
     */
    @Test
    public void getContractEnergyTypeByContractId() throws Exception {
        ArrayList<ContractEnergyTypeDto> contractEnergyTypeDtos = new ArrayList<>();

        contractEnergyTypeDtos.add(contractEnergyTypeDto1);
        contractEnergyTypeDtos.add(contractEnergyTypeDto);

        when(contractEnergyTypeController.getContractEnergyTypeByContractId("1")).thenReturn(contractEnergyTypeDtos);

        mockMvc.perform(get(path + "getContractEnergyTypeByContractId")
                        .param("contractId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());

    }

    /**
     * {@link ContractEnergyTypeController#updateContractEnergyType}
     */
    @Test
    public void updateContractEnergyType() throws Exception {
        contractEnergyTypeDto.setDayPrice(50);

        String json = new ObjectMapper().writeValueAsString(contractEnergyTypeDto);

        mockMvc.perform(put(path + "updateContractEnergyType")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());
    }

    /**
     * {@link ContractEnergyTypeController#deleteContractEnergyTypeById}
     */
    @Test
    public void deleteContractEnergyTypeById() throws Exception {
        mockMvc.perform(delete(path + "deleteContractEnergyTypeById")
                        .param("id", "1"))
                .andExpect(status().isOk());
    }
}
