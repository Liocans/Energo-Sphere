package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.WalletCustomerController;
import com.PDLB.PPE.DTO.model.WalletCustomerDto;
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
 * Unit testing of the {@link WalletCustomerController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(WalletCustomerController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class WalletCustomerControllerTest {


    private final String path = "http://localhost:8080/api/walletCustomer/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private WalletCustomerController walletCustomerController;
    private WalletCustomerDto walletCustomerDto, walletCustomerDto1;

    @BeforeEach
    public void setUp() {
        walletCustomerDto = new WalletCustomerDto(1, "U0000000000003");
        walletCustomerDto1 = new WalletCustomerDto(2, "U0000000000003");
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

        ArrayList<WalletCustomerDto> walletCustomerDtos = new ArrayList<>();
        walletCustomerDtos.add(walletCustomerDto);
        walletCustomerDtos.add(walletCustomerDto1);

        when(walletCustomerController.getWalletCustomerByWalletId("1")).thenReturn(walletCustomerDtos);

        mockMvc.perform(get(path + "getWalletCustomerByWalletId")
                        .param("walletId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }
}