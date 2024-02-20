package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.MeterController;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import com.PDLB.PPE.DTO.model.MeterDto;
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
 * Unit testing of the {@link MeterController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(MeterController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class MeterControllerTest {

    private final String path = "http://localhost:8080/api/meter/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private MeterController meterController;
    private MeterDto meterDto, meterDto1;
    private EnergyTypeDto energyTypeDto1, energyTypeDto2;

    @BeforeEach
    public void setUp() {
        meterDto = new MeterDto("1", true, 1250, energyTypeDto1, false);
        meterDto1 = new MeterDto("2", true, 1250, energyTypeDto2, true);
    }

    /**
     * {@link MeterController#createMeter}
     */
    @Test
    public void createMeter() throws Exception {
        String json = new ObjectMapper().writeValueAsString(meterDto);

        mockMvc.perform(post(path + "createMeter")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                        .param("buildingId", "1")
                )
                .andExpect(status().isCreated());
    }

    /**
     * {@link MeterController#getAllMeters}
     */
    @Test
    public void getAllMeters() throws Exception {
        ArrayList<MeterDto> meterDtos = new ArrayList<>();

        meterDtos.add(meterDto);
        meterDtos.add(meterDto1);

        when(meterController.getAllMeters()).thenReturn(meterDtos);

        mockMvc.perform(get(path + "getAllMeters"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterController#getMetersByBuildingId}
     */
    @Test
    public void getMetersByBuildingId() throws Exception {
        ArrayList<MeterDto> meterDtos = new ArrayList<>();

        meterDtos.add(meterDto);
        meterDtos.add(meterDto1);

        when(meterController.getMetersByBuildingId("1")).thenReturn(meterDtos);

        mockMvc.perform(get(path + "getMetersByBuildingId")
                        .param("buildingId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }


    /**
     * {@link MeterController#getMetersByWalletId}
     */
    @Test
    public void getMetersByWalletId() throws Exception {
        ArrayList<MeterDto> meterDtos = new ArrayList<>();

        meterDtos.add(meterDto);
        meterDtos.add(meterDto1);

        when(meterController.getMetersByWalletId("1")).thenReturn(meterDtos);

        mockMvc.perform(get(path + "getMetersByWalletId")
                        .param("walletId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterController#updateMeter}
     */
    @Test
    public void updateMeter() throws Exception {
        meterDto.setValue(500);

        String json = new ObjectMapper().writeValueAsString(meterDto);

        mockMvc.perform(put(path + "updateMeter")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());
    }

    /**
     * {@link MeterController#deleteMeterById}
     */
    @Test
    public void deleteMeterById() throws Exception {
        mockMvc.perform(delete(path + "deleteMeterById")
                        .param("id", "1"))
                .andExpect(status().isOk());
    }
}