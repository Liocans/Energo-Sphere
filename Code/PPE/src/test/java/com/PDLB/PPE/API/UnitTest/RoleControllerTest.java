package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.ProviderController;
import com.PDLB.PPE.API.controller.RoleController;
import com.PDLB.PPE.API.controller.UserController;
import com.PDLB.PPE.DTO.model.RoleDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link RoleController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(RoleController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class RoleControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RoleController roleController;
    private String path = "http://localhost:8080/api/role/";
    private RoleDto roleDto1, roleDto2;


    @BeforeEach
    public void setUp() {
        roleDto1 = new RoleDto(1, "FR");
        roleDto2 = new RoleDto(2, "EN");
    }

    /**
     * {@link RoleController#getAllRoles}
     */
    @Test
    void getAllRoles() throws Exception {

        ArrayList<RoleDto> roleDtos = new ArrayList<>();
        roleDtos.add(roleDto1);
        roleDtos.add(roleDto2);

        when(roleController.getAllRoles()).thenReturn(roleDtos);

        mockMvc.perform(get(path + "getAllRoles"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link RoleController#getRoleById}
     */
    @Test
    void getRoleById() throws Exception {

        when(roleController.getRoleById(1)).thenReturn(roleDto1);

        mockMvc.perform(get(path + "getRoleById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value("1"));
    }
}