package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.WalletMeterController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
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
import org.springframework.web.bind.annotation.RequestParam;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link WalletMeterController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletMeterControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;

    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/walletMeter/";
    }

    /**
     * {@link WalletMeterController#createWalletMeter}
     */
    @Test
    public void createWalletMeter() throws Exception {
        mockMvc.perform(post(path + "createWalletMeter")
                        .param("walletId", "W0000000000011")
                        .param("meterId", "000000000000000029"))
                .andExpect(status().isCreated());
    }

    /**
     * {@link WalletMeterController#getWalletMeterByWalletId}
     */
    @Test
    public void getWalletMeterByWalletId() throws Exception {

        mockMvc.perform(get(path + "getWalletMeterByWalletId")
                        .param("walletId", "W0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}