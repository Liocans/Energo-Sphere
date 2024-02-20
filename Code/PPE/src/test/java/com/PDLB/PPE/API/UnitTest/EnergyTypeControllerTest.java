package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.EnergyTypeController;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
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
 * Unit testing of the {@link EnergyTypeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(EnergyTypeController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class EnergyTypeControllerTest {

    private final String path = "http://localhost:8080/api/energyType/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private EnergyTypeController energyTypeController;
    private EnergyTypeDto energyTypeDto1, energyTypeDto2, energyTypeDto3;

    @BeforeEach
    public void setUp() {
        energyTypeDto1 = new EnergyTypeDto(1, "electricite");
        energyTypeDto2 = new EnergyTypeDto(2, "eau");
        energyTypeDto3 = new EnergyTypeDto(3, "gaz");
    }

    /**
     * {@link EnergyTypeController#getAllEnergyTypes}
     */
    @Test
    public void getAllEnergyTypes() throws Exception {
        ArrayList<EnergyTypeDto> energyTypeDtoArrayList = new ArrayList<>();

        energyTypeDtoArrayList.add(energyTypeDto1);
        energyTypeDtoArrayList.add(energyTypeDto2);
        energyTypeDtoArrayList.add(energyTypeDto3);

        when(energyTypeController.getAllEnergyTypes()).thenReturn(energyTypeDtoArrayList);

        mockMvc.perform(get(path + "getAllEnergyTypes"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());

    }

    /**
     * {@link EnergyTypeController#getEnergyTypeById}
     */
    @Test
    public void getEnergyTypeById() throws Exception {

        when(energyTypeController.getEnergyTypeById(1)).thenReturn(energyTypeDto1);

        mockMvc.perform(get(path + "getEnergyTypeById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link EnergyTypeController#getEnergyTypeByProviderId}
     */
    @Test
    public void getEnergyTypeByProviderId() throws Exception {
        ArrayList<EnergyTypeDto> energyTypeDtoArrayList = new ArrayList<>();

        energyTypeDtoArrayList.add(energyTypeDto1);
        energyTypeDtoArrayList.add(energyTypeDto2);

        when(energyTypeController.getEnergyTypeByProviderId("1")).thenReturn(energyTypeDtoArrayList);

        mockMvc.perform(get(path + "getEnergyTypeByProviderId")
                        .param("providerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}