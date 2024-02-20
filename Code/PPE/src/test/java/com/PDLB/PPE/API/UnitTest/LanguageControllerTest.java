package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.LanguageController;
import com.PDLB.PPE.DTO.model.LanguageDto;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit testing of the {@link LanguageController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(LanguageController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class LanguageControllerTest {

    private final String path = "http://localhost:8080/api/language/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private LanguageController languageController;
    private LanguageDto languageDto;

    @BeforeEach
    public void setUp() {
        languageDto = new LanguageDto(1, "FR");
    }

    /**
     * {@link LanguageController#getAllLanguages}
     */
    @Test
    void getAllLanguages() throws Exception {
        ArrayList<LanguageDto> languageDtos = new ArrayList<>();

        languageDtos.add(languageDto);

        when(languageController.getAllLanguages()).thenReturn(languageDtos);

        mockMvc.perform(get(path + "getAllLanguages"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link LanguageController#getLanguageById}
     */
    @Test
    void getLanguageById() throws Exception {
        when(languageController.getLanguageById(1)).thenReturn(languageDto);

        mockMvc.perform(get(path + "getLanguageById")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").exists())
                .andExpect(jsonPath("$.id").isNotEmpty());
    }
}