package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.WalletCustomerController;
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
import org.springframework.web.bind.annotation.RequestParam;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link WalletCustomerController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletCustomerControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;

    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/walletCustomer/";
    }

    /**
     * {@link WalletCustomerController#createWalletCustomer}
     */
    @Test
    public void createWalletCustomer() throws Exception {
        mockMvc.perform(post(path + "createWalletCustomer")
                        .param("walletId", "W0000000000001")
                        .param("customerId", "U0000000000002")
                        .param("privilege", "2"))
                .andExpect(status().isCreated());
    }

    /**
     * {@link WalletCustomerController#getWalletCustomerByWalletId}
     */
    @Test
    public void getWalletCustomerByWalletId() throws Exception {

        mockMvc.perform(get(path + "getWalletCustomerByWalletId")
                        .param("walletId", "W0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}