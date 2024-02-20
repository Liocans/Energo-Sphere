package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.MeterController;
import com.PDLB.PPE.DTO.model.EnergyTypeDto;
import com.PDLB.PPE.DTO.model.MeterDto;
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
 * Integration testing of the {@link MeterController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class MeterControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static MeterDto meterDto;

    @BeforeAll
    public static void setUp() {
        meterDto = new MeterDto(true, 0, new EnergyTypeDto(1, "eau"), false);
    }

    @BeforeEach
    public void setUp2() {
        path = "http://localhost:" + port + "/api/meter/";
    }

    /**
     * {@link MeterController#createMeter}
     */
    @Test
    @Order(1)
    public void createMeter() throws Exception {

        response = mockMvc.perform(post(path + "createMeter")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(meterDto))
                        .param("buildingId", "H0000000000005")
                )
                .andExpect(status().isCreated())
                .andReturn();

        meterDto.setId(response.getResponse().getContentAsString());
    }

    /**
     * {@link MeterController#getAllMeters}
     */
    @Test
    @Order(2)
    public void getAllMeters() throws Exception {

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
    @Order(3)
    public void getMetersByBuildingId() throws Exception {

        mockMvc.perform(get(path + "getMetersByBuildingId")
                        .param("buildingId", "H0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterController#getMetersByWalletId}
     */
    @Test
    @Order(4)
    public void getMetersByWalletId() throws Exception {

        mockMvc.perform(get(path + "getMetersByWalletId")
                        .param("walletId", "W0000000000001")
                )
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterController#updateMeter}
     */
    @Test
    @Order(5)
    public void updateMeter() throws Exception {

        meterDto.setValue(700);

        mockMvc.perform(put(path + "updateMeter")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(meterDto)))
                .andExpect(status().isOk());
    }

    /**
     * {@link MeterController#deleteMeterById}
     */
    @Test
    @Order(6)
    public void deleteMeterById() throws Exception {

        mockMvc.perform(delete(path + "deleteMeterById")
                        .param("id", meterDto.getId()))
                .andExpect(status().isOk());
    }
}