package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.ContractTypeController;
import com.PDLB.PPE.DTO.model.ContractTypeDto;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link ContractTypeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ContractTypeController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ContractTypeControllerTest {

    private final String path = "http://localhost:8080/api/contractType/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ContractTypeController contractTypeController;
    private ContractTypeDto contractTypeDto, contractTypeDto1;


    @BeforeEach
    public void setUp() {
        contractTypeDto = new ContractTypeDto(1, "fixe");
        contractTypeDto1 = new ContractTypeDto(2, "variable");
    }

    /**
     * {@link ContractTypeController#getAllContractTypes}
     */
    @Test
    public void getAllContractTypes() throws Exception {

        ArrayList<ContractTypeDto> contractTypeDtos = new ArrayList<>();

        contractTypeDtos.add(contractTypeDto);
        contractTypeDtos.add(contractTypeDto1);

        when(contractTypeController.getAllContractTypes()).thenReturn(contractTypeDtos);

        mockMvc.perform(get(path + "getAllContractTypes"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ContractTypeController#getContractTypeById}
     */
    @Test
    public void getContractTypeById() throws Exception {

        when(contractTypeController.getContractTypeById(1)).thenReturn(contractTypeDto);

        mockMvc.perform(get(path + "getContractTypeById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }
}