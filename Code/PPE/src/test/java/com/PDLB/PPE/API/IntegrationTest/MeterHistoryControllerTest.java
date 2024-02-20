package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.MeterHistoryController;
import com.PDLB.PPE.DTO.model.MeterHistoryDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.hibernate.annotations.OnDelete;
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
import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Integration testing of the {@link MeterHistoryController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class MeterHistoryControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static MeterHistoryDto meterHistoryDto;

    @BeforeAll
    public static void setUp() {
        meterHistoryDto = new MeterHistoryDto(LocalDate.now().minusDays(5), 1500);
    }

    @BeforeEach
    public void setUp2() {
        path = "http://localhost:" + port + "/api/meterHistory/";
    }

    /**
     * {@link MeterHistoryController#createMeterHistory}
     */
    @Test
    @Order(1)
    public void createMeterHistory() throws Exception {

        response = mockMvc.perform(post(path + "createMeterHistory")
                        .param("meterId", "000000000000000003")
                        .content(new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(meterHistoryDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andReturn();

        meterHistoryDto.setId(Integer.parseInt(response.getResponse().getContentAsString()));
    }

    /**
     * {@link MeterHistoryController#getMeterHistoryByMeterId}
     */
    @Test
    @Order(2)
    public void getMeterHistoryByMeterId() throws Exception {

        mockMvc.perform(get(path + "getMeterHistoryByMeterId")
                        .param("meterId", "000000000000000003")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterHistoryController#getMeterHistoryByMeterIdUsingDate}
     */
    @Test
    @Order(3)
    public void getMeterHistoryByMeterIdUsingDate() throws Exception {
        ArrayList<MeterHistoryDto> meterHistoryDtos = new ArrayList<>();
        meterHistoryDtos.add(meterHistoryDto);
        LocalDate startDate = LocalDate.now().minusYears(1);
        LocalDate endDate = LocalDate.now();

        mockMvc.perform(get(path + "getMeterHistoryByMeterIdUsingDate")
                        .param("meterId", "000000000000000003")
                        .param("startDate", startDate.toString())
                        .param("endDate", endDate.toString())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterHistoryController#countMeterHistoryByMeterId}
     */
    @Test
    @Order(4)
    public void countMeterHistoryByMeterId() throws Exception {

        mockMvc.perform(get(path + "countMeterHistoryByMeterId")
                        .param("meterId", "000000000000000003")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link MeterHistoryController#updateMeterHistory}
     */
    @Test
    @Order(5)
    public void updateMeterHistory() throws Exception {

        meterHistoryDto.setValue(800);

        mockMvc.perform(put(path + "updateMeterHistory")
                        .content( new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(meterHistoryDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    /**
     * {@link MeterHistoryController#deleteMeterHistoryById}
     */
    @Test
    @Order(6)
    public void deleteMeterHistoryById() throws Exception {

        mockMvc.perform(delete(path + "deleteMeterHistoryById")
                        .param("id", String.valueOf(meterHistoryDto.getId()))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}