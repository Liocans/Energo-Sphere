package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.WalletMeterController;
import com.PDLB.PPE.DTO.model.WalletMeterDto;
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

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link WalletMeterController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(WalletMeterController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletMeterControllerTest {

    private final String path = "http://localhost:8080/api/walletMeter/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private WalletMeterController walletMeterController;
    private WalletMeterDto walletMeterDto;

    @BeforeEach
    public void setUp() {
        walletMeterDto = new WalletMeterDto(1, "W0000000000001", "000000000000000001");
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
        ArrayList<WalletMeterDto> walletMeterDtos = new ArrayList<>();
        walletMeterDtos.add(walletMeterDto);

        when(walletMeterController.getWalletMeterByWalletId("1")).thenReturn(walletMeterDtos);

        mockMvc.perform(get(path + "getWalletMeterByWalletId")
                        .param("walletId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}