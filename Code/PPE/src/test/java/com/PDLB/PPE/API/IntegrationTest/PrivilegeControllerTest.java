package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.PrivilegeController;
import com.PDLB.PPE.API.controller.RoleController;
import com.PDLB.PPE.DTO.model.PrivilegeDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration testing of the {@link PrivilegeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
class PrivilegeControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;


    @BeforeEach
    public void setUp() {
        path = "http://localhost:" + port + "/api/privilege/";
    }

    /**
     * {@link PrivilegeController#getAllPrivileges}
     */
    @Test
    void getAllPrivileges() throws Exception {

        mockMvc.perform(get(path + "getAllPrivileges"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link PrivilegeController#getPrivilegeById}
     */
    @Test
    void getPrivilegeById() throws Exception {

        mockMvc.perform(get(path + "getPrivilegeById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("1"));
    }

    /**
     * {@link PrivilegeController#getPrivilegeByCustomerIdAndWalletId}
     */
    @Test
    void getPrivilegeByCustomerIdAndWalletId() throws Exception {

        mockMvc.perform(get(path + "getPrivilegeByCustomerIdAndWalletId")
                        .param("customerId", "U0000000000003")
                        .param("walletId", "W0000000000001"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("1"));
    }
}