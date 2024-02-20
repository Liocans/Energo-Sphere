package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.LanguageController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link LanguageController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class LanguageControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;

    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/language/";
    }

    /**
     * {@link LanguageController#getAllLanguages}
     */
    @Test
    void getAllLanguages() throws Exception {

        mockMvc.perform(get(path + "getAllLanguages"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link LanguageController#getLanguageById}
     */
    @Test
    void getLanguageById() throws Exception {

        mockMvc.perform(get(path + "getLanguageById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }
}