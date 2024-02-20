package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.BuildingController;
import com.PDLB.PPE.DTO.model.BuildingDto;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link BuildingController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(BuildingController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class BuildingControllerTest {

    private final String path = "http://localhost:8080/api/building/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private BuildingController buildingController;
    private BuildingDto buildingDto1, buildingDto2, buildingDto3;

    @BeforeEach
    public void setUp() {
        buildingDto1 = new BuildingDto("1", "Lala", "Lalacity", true, "25", "2.58", "Lali Street", 5080);
        buildingDto2 = new BuildingDto("2", "Lala", "Lalacity", false, "26", "2.58", "Lali Street", 5080);
        buildingDto3 = new BuildingDto("3", "Lala", "Lalacity", true, "27", "2.58", "Lali Street", 5080);
    }

    /**
     * {@link BuildingController#createBuilding}
     */
    @Test
    public void createBuilding() throws Exception {
        String json = new ObjectMapper().writeValueAsString(buildingDto3);

        mockMvc.perform(post(path + "createBuilding")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                        .param("customerId", "1")
                )
                .andExpect(status().isCreated());
    }

    /**
     * {@link BuildingController#getAllBuildings}
     */
    @Test
    public void getAllBuildings() throws Exception {

        ArrayList<BuildingDto> buildingList = new ArrayList<>();

        buildingList.add(buildingDto1);
        buildingList.add(buildingDto2);

        when(buildingController.getAllBuildings(0, 5)).thenReturn(buildingList);

        mockMvc.perform(get(path + "getAllBuildings"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link BuildingController#countAllBuildings}
     */
    @Test
    public void countAllBuildings() throws Exception {

        when(buildingController.countAllBuildings()).thenReturn(50);

        mockMvc.perform(get(path + "countAllBuildings"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link BuildingController#getBuildingById}
     */
    @Test
    public void getBuildingById() throws Exception {

        when(buildingController.getBuildingById("1")).thenReturn(buildingDto1);
        when(buildingController.getBuildingById("4")).thenReturn(null);

        mockMvc.perform(get(path + "getBuildingById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(buildingDto1.getId()));

        mockMvc.perform(get(path + "getBuildingById")
                        .param("id", "2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());

    }

    /**
     * {@link BuildingController#getBuildingByAdress}
     */
    @Test
    public void getBuildingByAdress() throws Exception {

        when(buildingController.getBuildingByAdress("Lali Street", "25", "Lalacity", 5080)).thenReturn(buildingDto1);
        when(buildingController.getBuildingByAdress("Lali Street", "28", "Lalacity", 5080)).thenReturn(null);

        mockMvc.perform(get(path + "getBuildingByAdress")
                        .param("street", "Lali Street")
                        .param("number", "25")
                        .param("city", "Lalacity")
                        .param("zipCode", "5080"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(buildingDto1.getId()));

        mockMvc.perform(get(path + "getBuildingByAdress")
                        .param("street", "Lali Street")
                        .param("number", "28")
                        .param("city", "Lalacity")
                        .param("zipCode", "5080"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());

    }


    /**
     * {@link BuildingController#getBuildingByCustomerId}
     */
    @Test
    public void getBuildingByCustomerId() throws Exception {
        ArrayList<BuildingDto> buildingDtos = new ArrayList<BuildingDto>();

        buildingDtos.add(buildingDto1);
        buildingDtos.add(buildingDto2);

        when(buildingController.getBuildingByCustomerId("1", 0, 5)).thenReturn(buildingDtos);

        mockMvc.perform(get(path + "getBuildingByCustomerId")
                        .param("customerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link BuildingController#countBuildingByCustomerId}
     */
    @Test
    public void countBuildingByCustomerId() throws Exception {
        when(buildingController.countBuildingByCustomerId("1")).thenReturn(5);

        mockMvc.perform(get(path + "countBuildingByCustomerId")
                        .param("customerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link BuildingController#updateBuilding}
     */
    @Test
    public void updateBuilding() throws Exception {

        buildingDto3.setBuildingName("Lola");

        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(buildingDto3);

        mockMvc.perform(put(path + "updateBuilding")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(status().isOk());
    }

    /**
     * {@link BuildingController#deleteBuildingById}
     */
    @Test
    public void deleteBuildingById() throws Exception {

        mockMvc.perform(delete(path + "deleteBuildingById")
                        .param("id", "1"))
                .andExpect(status().isOk());
    }

    /**
     * {@link BuildingController#deleteBuildingByAdress}
     */
    @Test
    public void deleteBuildingByAdress() throws Exception {

        mockMvc.perform(delete(path + "deleteBuildingByAdress")
                        .param("street", "Lali Street")
                        .param("number", "25")
                        .param("city", "Lalacity")
                        .param("zipCode", "5080"))
                .andExpect(status().isOk());
    }
}