package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.MeterHistoryController;
import com.PDLB.PPE.DTO.model.MeterHistoryDto;
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
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Unit testing of the {@link MeterHistoryController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(MeterHistoryController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class MeterHistoryControllerTest {

    private final String path = "http://localhost:8080/api/meterHistory/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private MeterHistoryController meterHistoryController;
    private MeterHistoryDto meterHistoryDto;

    @BeforeEach
    void setUp() {
        meterHistoryDto = new MeterHistoryDto(1, LocalDate.now(), 500);
    }

    /**
     * {@link MeterHistoryController#createMeterHistory}
     */
    @Test
    public void createMeterHistory() throws Exception {
        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(meterHistoryDto);

        mockMvc.perform(post(path + "createMeterHistory")
                        .param("meterId", "1")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    /**
     * {@link MeterHistoryController#getMeterHistoryByMeterId}
     */
    @Test
    public void getMeterHistoryByMeterId() throws Exception {
        ArrayList<MeterHistoryDto> meterHistoryDtos = new ArrayList<>();
        meterHistoryDtos.add(meterHistoryDto);

        when(meterHistoryController.getMeterHistoryByMeterId("1", 0, 5,"date",-1)).thenReturn(meterHistoryDtos);
        mockMvc.perform(get(path + "getMeterHistoryByMeterId")
                        .param("meterId", "1")
                        .param("offset","0")
                        .param("limit","5")
                        .param("columnName", "date")
                        .param("order","-1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link MeterHistoryController#getMeterHistoryByMeterIdUsingDate}
     */
    @Test
    public void getMeterHistoryByMeterIdUsingDate() throws Exception {
        ArrayList<MeterHistoryDto> meterHistoryDtos = new ArrayList<>();
        meterHistoryDtos.add(meterHistoryDto);
        LocalDate startDate = LocalDate.now();
        LocalDate endDate = LocalDate.now();

        when(meterHistoryController.getMeterHistoryByMeterIdUsingDate("1", startDate, endDate)).thenReturn(meterHistoryDtos);
        mockMvc.perform(get(path + "getMeterHistoryByMeterIdUsingDate")
                        .param("meterId", "1")
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
    public void countMeterHistoryByMeterId() throws Exception {

        when(meterHistoryController.countMeterHistoryByMeterId("1")).thenReturn(50);

        mockMvc.perform(get(path + "countMeterHistoryByMeterId")
                        .param("meterId", "1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link MeterHistoryController#updateMeterHistory}
     */
    @Test
    public void updateMeterHistory() throws Exception {
        meterHistoryDto.setValue(800);

        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(meterHistoryDto);

        mockMvc.perform(put(path + "updateMeterHistory")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    /**
     * {@link MeterHistoryController#deleteMeterHistoryById}
     */
    @Test
    public void deleteMeterHistoryById() throws Exception {

        mockMvc.perform(delete(path + "deleteMeterHistoryById")
                        .param("id", "1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}