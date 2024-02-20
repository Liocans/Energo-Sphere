package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.UserController;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Integration testing of the {@link UserController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;

    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/auth/";
    }

    /**
     * {@link UserController#authenticateUser}
     */
    @Test
    @Order(1)
    public void authenticateUser() throws Exception {
        mockMvc.perform(post(path + "signin")
                        .param("username", "Aspiravi Energy")
                        .param("password", "Provider"))
                .andExpect(jsonPath("$").exists())
                .andExpect(status().isOk())
                .andReturn();
    }

    /**
     * {@link UserController#logoutUser}
     */
    @Test
    @Order(2)
    public void logoutUser() throws Exception {
        mockMvc.perform(post(path + "signout"))
                .andExpect(jsonPath("$").exists())
                .andExpect(status().isOk())
                .andReturn();
    }
}