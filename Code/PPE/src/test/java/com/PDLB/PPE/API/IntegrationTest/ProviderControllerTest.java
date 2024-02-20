package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.ProviderController;
import com.PDLB.PPE.DTO.model.ProviderDto;
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link ProviderController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ProviderControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;


    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/provider/";
    }

    /**
     * {@link ProviderController#getAllProviders}
     */
    @Test
    @Order(1)
    public void getAllProviders() throws Exception {

        mockMvc.perform(get(path + "getAllProviders"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ProviderController#getProviderById}
     */
    @Test
    @Order(2)
    public void getProviderById() throws Exception {

        mockMvc.perform(get(path + "getProviderById")
                        .param("id", "P0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("P0000000000001"));
    }

    /**
     * {@link ProviderController#getProviderByName}
     */
    @Test
    @Order(3)
    public void getProviderByName() throws Exception {

        mockMvc.perform(get(path + "getProviderByName")
                        .param("name", "Aspiravi Energy"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.name").value("Aspiravi Energy"));
    }

    /**
     * {@link ProviderController#updateProvider}
     */
    @Test
    @Order(4)
    public void updateProvider() throws Exception {

        ProviderDto provider = new ProviderDto("P0000000000001", "Aspiravi Energy", "Thor Park", "0", "Genk", "Belgique", 3600, 2);
        provider.setNumber("1");

        mockMvc.perform(put(path + "updateProvider")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(provider)))
                .andExpect(status().isOk());
    }
}