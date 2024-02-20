package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.ProviderController;
import com.PDLB.PPE.DTO.model.ProviderDto;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link ProviderController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(ProviderController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class ProviderControllerTest {

    private final String path = "http://localhost:8080/api/provider/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProviderController providerController;
    private ProviderDto providerDto, providerDto1;

    @BeforeEach
    public void setUp() {
        providerDto = new ProviderDto("1", "Almond Water & Co", "Charle de Gaulle", "25A", "CountryRoad", "West Virginia", 5000, 2);
        providerDto1 = new ProviderDto("2", "Buzzing capital", "Charle de Gaulle", "25B", "CountryRoad", "West Virginia", 5000, 2);
    }

    /**
     * {@link ProviderController#getAllProviders}
     */
    @Test
    public void getAllProviders() throws Exception {
        ArrayList<ProviderDto> providerDtos = new ArrayList<>();

        providerDtos.add(providerDto);
        providerDtos.add(providerDto1);

        when(providerController.getAllProviders()).thenReturn(providerDtos);

        mockMvc.perform(get(path + "getAllProviders"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link ProviderController#getProviderById}
     */
    @Test
    public void getProviderById() throws Exception {

        when(providerController.getProviderById("1")).thenReturn(providerDto);
        when(providerController.getProviderById("2")).thenReturn(providerDto1);
        when(providerController.getProviderById("3")).thenReturn(null);

        mockMvc.perform(get(path + "getProviderById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(providerDto.getId()));

        mockMvc.perform(get(path + "getProviderById")
                        .param("id", "2"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(providerDto1.getId()));

        mockMvc.perform(get(path + "getProviderById")
                        .param("id", "3"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());
    }

    /**
     * {@link ProviderController#getProviderByName}
     */
    @Test
    public void getProviderByName() throws Exception {

        when(providerController.getProviderByName("Almond Water & Co")).thenReturn(providerDto);
        when(providerController.getProviderByName("Buzzing capital")).thenReturn(providerDto1);
        when(providerController.getProviderByName("Rocket Science")).thenReturn(null);

        mockMvc.perform(get(path + "getProviderByName")
                        .param("name", "Almond Water & Co"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(providerDto.getId()));

        mockMvc.perform(get(path + "getProviderByName")
                        .param("name", "Buzzing capital"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").value(providerDto1.getId()));

        mockMvc.perform(get(path + "getProviderByName")
                        .param("name", "Rocket Science"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").doesNotExist());
    }

    /**
     * {@link ProviderController#updateProvider}
     */
    @Test
    public void updateProvider() throws Exception {

        providerDto.setName("Almond Water & Co");

        String json = new ObjectMapper().writeValueAsString(providerDto);

        mockMvc.perform(put(path + "updateProvider")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());
    }
}