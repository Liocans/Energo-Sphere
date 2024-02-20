package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.MeterController;
import com.PDLB.PPE.API.controller.NotificationController;
import com.PDLB.PPE.API.controller.PrivilegeController;
import com.PDLB.PPE.API.controller.RoleController;
import com.PDLB.PPE.DTO.model.PrivilegeDto;
import com.PDLB.PPE.DTO.model.RoleDto;
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

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

/**
 * Unit testing of the {@link PrivilegeController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(PrivilegeController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
class PrivilegeControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private PrivilegeController privilegeController;
    private String path = "http://localhost:8080/api/privilege/";
    private PrivilegeDto privilegeDto1, privilegeDto2;


    @BeforeEach
    public void setUp() {
        privilegeDto1 = new PrivilegeDto(1, "Gestionnaire");
        privilegeDto2 = new PrivilegeDto(2, "Lecture");
    }

    /**
     * {@link PrivilegeController#getAllPrivileges}
     */
    @Test
    void getAllPrivileges() throws Exception {

        ArrayList<PrivilegeDto> privilegeDtos = new ArrayList<>();
        privilegeDtos.add(privilegeDto1);
        privilegeDtos.add(privilegeDto2);

        when(privilegeController.getAllPrivileges()).thenReturn(privilegeDtos);

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

        when(privilegeController.getPrivilegeById(1)).thenReturn(privilegeDto1);

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
        when(privilegeController.getPrivilegeByCustomerIdAndWalletId("1","1")).thenReturn(privilegeDto1);

        mockMvc.perform(get(path + "getPrivilegeByCustomerIdAndWalletId")
                        .param("customerId", "1")
                        .param("walletId", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("1"));
    }
}