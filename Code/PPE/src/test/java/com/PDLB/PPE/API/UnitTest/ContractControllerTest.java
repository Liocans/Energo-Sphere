package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.ContractController;
import com.PDLB.PPE.DTO.model.ContractDto;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
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

import java.time.LocalDate;
import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link ContractController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ContractController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ContractControllerTest {

    private final String path = "http://localhost:8080/api/contract/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ContractController contractController;
    private ContractDto contractDto1, contractDto2;
    private ContractTypeDto contractTypeDto1, contractTypeDto2;



    @BeforeEach
    public void setUp() {
        contractTypeDto1 = new ContractTypeDto(1, "fixe");
        contractTypeDto2 = new ContractTypeDto(1, "fixe");
        contractDto1 = new ContractDto("1", LocalDate.now(), LocalDate.now().plusYears(1), "1", contractTypeDto1, "1", "1");
        contractDto2 = new ContractDto("2", LocalDate.now(), LocalDate.now().plusYears(1), "2", contractTypeDto2, "2", "1");
    }

    /**
     * {@link ContractController#createContract}
     */
    @Test
    public void createContract() throws Exception {

        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(contractDto1);

        mockMvc.perform(post(path + "createContract")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    /**
     * {@link ContractController#getAllContracts}
     */
    @Test
    public void getAllContracts() throws Exception {
        ArrayList<ContractDto> contractDtoList = new ArrayList<>();

        contractDtoList.add(contractDto1);
        contractDtoList.add(contractDto2);

        when(contractController.getAllContracts()).thenReturn(contractDtoList);

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
    public void getContractById() throws Exception {

        when(contractController.getContractById("1")).thenReturn(contractDto1);

        mockMvc.perform(get(path + "getContractById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link ContractController#getContractByProviderId}
     */
    @Test
    public void getContractByProviderId() throws Exception {
        ArrayList<ContractDto> contractDtoList = new ArrayList<>();
        ArrayList<ContractDto> contractDtoList1 = new ArrayList<>();

        contractDtoList.add(contractDto1);
        contractDtoList1.add(contractDto2);

        when(contractController.getContractByProviderId("1", 0, 5)).thenReturn(contractDtoList);
        when(contractController.getContractByProviderId("2", 0, 5)).thenReturn(contractDtoList1);

        mockMvc.perform(get(path + "getContractByProviderId")
                        .param("providerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());

        mockMvc.perform(get(path + "getContractByProviderId")
                        .param("providerId", "2"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractController#countContractByProviderId}
     */
    @Test
    public void countContractByProviderId() throws Exception {
        when(contractController.countContractByProviderId("1")).thenReturn(50);

        mockMvc.perform(get(path + "countContractByProviderId")
                        .param("providerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link ContractController#getContractByCustomerId}
     */
    @Test
    public void getContractByCustomerId() throws Exception {
        ArrayList<ContractDto> contractDtoList = new ArrayList<>();

        contractDtoList.add(contractDto1);
        contractDtoList.add(contractDto2);

        when(contractController.getContractByCustomerId("1", 0, 5)).thenReturn(contractDtoList);

        mockMvc.perform(get(path + "getContractByCustomerId")
                        .param("customerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractController#countContractByCustomerId}
     */
    @Test
    public void countContractByCustomerId() throws Exception {

        when(contractController.countContractByCustomerId("1")).thenReturn(50);

        mockMvc.perform(get(path + "countContractByCustomerId")
                        .param("customerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link ContractController#updateContract}
     */
    @Test
    public void updateContract() throws Exception {

        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(contractDto1);

        mockMvc.perform(put(path + "updateContract")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    /**
     * {@link ContractController#deleteContractById}
     */
    @Test
    public void deleteContractById() throws Exception {

        mockMvc.perform(delete(path + "deleteContractById")
                        .param("id", "1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}