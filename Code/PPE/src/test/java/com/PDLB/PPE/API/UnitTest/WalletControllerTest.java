package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.WalletController;
import com.PDLB.PPE.DTO.model.WalletDto;
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

import java.util.ArrayList;
import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link WalletController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(WalletController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletControllerTest {

    private final String path = "http://localhost:8080/api/wallet/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private WalletController walletController;
    private WalletDto walletDto;

    @BeforeEach
    public void setUp() {
        walletDto = new WalletDto("1", "1", "", "Lecture-seule");
    }


    /**
     * {@link WalletController#createWallet}
     */
    @Test
    public void createWallet() throws Exception {
        mockMvc.perform(post(path + "createWallet")
                        .param("customerId", "1")
                        .param("buildingId","1"))
                .andExpect(status().isCreated());
    }


    /**
     * {@link WalletController#getAllWallets}
     */
    @Test
    public void getAllWallets() throws Exception {
        when(walletController.getAllWallets()).thenReturn(new ArrayList<>(Collections.singletonList(walletDto)));

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
    public void getWalletById() throws Exception {

        when(walletController.getWalletById("1")).thenReturn(walletDto);

        mockMvc.perform(get(path + "getWalletById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

    /**
     * {@link WalletController#getWalletByCustomerId}
     */
    @Test
    public void getWalletByCustomerId() throws Exception {

        when(walletController.getWalletByCustomerId("1", 0, 5)).thenReturn(new ArrayList<>(Collections.singletonList(walletDto)));

        mockMvc.perform(get(path + "getWalletByCustomerId")
                        .param("customerId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}