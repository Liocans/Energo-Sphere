package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.WalletController;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link WalletController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;

    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/wallet/";
    }


    /**
     * {@link WalletController#createWallet}
     */
    @Test
    public void createWallet() throws Exception {
        mockMvc.perform(post(path + "createWallet")
                        .param("customerId", "U0000000000003")
                        .param("buildingId","H0000000000001"))
                .andExpect(status().isCreated());
    }

    /**
     * {@link WalletController#getAllWallets}
     */
    @Test
    @Order(2)
    public void getAllWallets() throws Exception {

        mockMvc.perform(get(path + "getAllWallets"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link WalletController#getWalletById}
     */
    @Test
    @Order(3)
    public void getWalletById() throws Exception {

        mockMvc.perform(get(path + "getWalletById")
                        .param("id", "W0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link WalletController#getWalletByCustomerId}
     */
    @Test
    @Order(4)
    public void getWalletByCustomerId() throws Exception {

        mockMvc.perform(get(path + "getWalletByCustomerId")
                        .param("customerId", "U0000000000003"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}