package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.BuildingController;
import com.PDLB.PPE.DTO.model.BuildingDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
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

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link BuildingController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class BuildingControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static BuildingDto buildingDto, buildingDto1;


    @BeforeAll
    public static void setUp() {
        buildingDto = new BuildingDto("Lala", "Lalacity", false, "25", "2.58", "Lali Street", 5080);
        buildingDto1 = new BuildingDto("Lala", "Lalacity", false, "26", "2.58", "Lali Street", 5080);
    }

    @BeforeEach
    public void setUp2() throws Exception {
        path = "http://localhost:" + port + "/api/building/";
    }

    /**
     * {@link BuildingController#createBuilding}
     */
    @Test
    @Order(1)
    public void createBuilding() throws Exception {
        response = mockMvc.perform(post(path + "createBuilding")
                        .param("customerId", "U0000000000001")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(buildingDto)))
                .andExpect(jsonPath("$").exists())
                .andExpect(status().isCreated())
                .andReturn();

        buildingDto.setId(response.getResponse().getContentAsString());

        response = mockMvc.perform(post(path + "createBuilding")
                        .param("customerId", "U0000000000001")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(buildingDto1)))
                .andExpect(jsonPath("$").exists())
                .andExpect(status().isCreated())
                .andReturn();

        buildingDto1.setId(response.getResponse().getContentAsString());

    }

    /**
     * {@link BuildingController#getAllBuildings}
     */
    @Test
    @Order(2)
    public void getAllBuildings() throws Exception {

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
    @Order(3)
    public void countAllBuildings() throws Exception {

        mockMvc.perform(get(path + "countAllBuildings"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link BuildingController#getBuildingById}
     */
    @Test
    @Order(4)
    public void getBuildingById() throws Exception {
        mockMvc.perform(get(path + "getBuildingById")
                        .param("id", buildingDto.getId()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(buildingDto.getId()));

        mockMvc.perform(get(path + "getBuildingById")
                        .param("id", "2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());
    }

    /**
     * {@link BuildingController#getBuildingByAdress}
     */
    @Test
    @Order(5)
    public void getBuildingByAdress() throws Exception {

        mockMvc.perform(get(path + "getBuildingByAdress")
                        .param("street", buildingDto.getStreet())
                        .param("number", buildingDto.getNumber())
                        .param("city", buildingDto.getCity())
                        .param("zipCode", String.valueOf(buildingDto.getZipCode())))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(buildingDto.getId()));

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
    @Order(6)
    public void getBuildingByCustomerId() throws Exception {
        mockMvc.perform(get(path + "getBuildingByCustomerId")
                        .param("customerId", "U0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link BuildingController#countBuildingByCustomerId}
     */
    @Test
    @Order(7)
    public void countBuildingByCustomerId() throws Exception {

        mockMvc.perform(get(path + "countBuildingByCustomerId")
                        .param("customerId", "U0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link BuildingController#updateBuilding}
     */
    @Test
    @Order(8)
    public void updateBuilding() throws Exception {
        buildingDto.setBuildingName("Lola");

        String json = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(buildingDto);

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
    @Order(9)
    public void deleteBuildingById() throws Exception {

        mockMvc.perform(delete(path + "deleteBuildingById")
                        .param("id", buildingDto.getId()))
                .andExpect(status().isOk());
    }

    /**
     * {@link BuildingController#deleteBuildingByAdress}
     */
    @Test
    @Order(10)
    public void deleteBuildingByAdress() throws Exception {

        mockMvc.perform(delete(path + "deleteBuildingByAdress")
                        .param("street", buildingDto1.getStreet())
                        .param("number", buildingDto1.getNumber())
                        .param("city", buildingDto1.getCity())
                        .param("zipCode", String.valueOf(buildingDto1.getZipCode())))
                .andExpect(status().isOk());

    }
}