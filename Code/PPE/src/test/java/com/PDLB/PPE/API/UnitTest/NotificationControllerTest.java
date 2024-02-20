package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.NotificationController;
import com.PDLB.PPE.DTO.model.NotificationDto;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Unit testing of the {@link NotificationController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(NotificationController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class NotificationControllerTest {

    private final String path = "http://localhost:8080/api/notification/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private NotificationController notificationController;
    private NotificationDto notificationDto1, notificationDto2, notificationDto3, notificationDto4;

    @BeforeEach
    public void setUp() {
        notificationDto1 = new NotificationDto(1,"U0000000000001", "P0000000000001", "Salut", true, true, true);
        notificationDto2 = new NotificationDto(2,"U0000000000001", "P0000000000001", "Salut ça va", false, true, false);
        notificationDto3 = new NotificationDto(3,"U0000000000001", "P0000000000001", "Salut, ça va", false, false, true);
        notificationDto4 = new NotificationDto(4,"U0000000000001", "P0000000000001", "Salut, je suis pas chez moi", false, false, false);

    }

    /**
     * {@link NotificationController#createNotification}
     */
    @Test
    public void createNotification() throws Exception {
        String json = new ObjectMapper().writeValueAsString(notificationDto1);

        mockMvc.perform(post(path + "createNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isCreated());
    }

    /**
     * {@link NotificationController#getNotificationsByCustomerId}
     */
    @Test
    public void getNotificationsByCustomerId() throws Exception {
        ArrayList<NotificationDto> notificationDtos = new ArrayList<>();
        notificationDtos.add(notificationDto2);
        notificationDtos.add(notificationDto1);
        notificationDtos.add(notificationDto3);
        notificationDtos.add(notificationDto4);

        when(notificationController.getNotificationsByCustomerId("U0000000000001", 0, 5)).thenReturn(notificationDtos);
        mockMvc.perform(get(path + "getNotificationsByCustomerId")
                        .param("customerId", "U0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link NotificationController#getSpecificNotificationsByCustomerId}
     */
    @Test
    public void getSpecificNotificationsByCustomerId() throws Exception {

        ArrayList<NotificationDto> notificationDtos = new ArrayList<>();
        notificationDtos.add(notificationDto2);
        notificationDtos.add(notificationDto1);
        notificationDtos.add(notificationDto3);
        notificationDtos.add(notificationDto4);

        when(notificationController.getSpecificNotificationsByCustomerId("U0000000000001", false, false, false, 0, 5)).thenReturn(notificationDtos);
        mockMvc.perform(get(path + "getSpecificNotificationsByCustomerId")
                        .param("customerId", "U0000000000001")
                        .param("isAccept", String.valueOf(false))
                        .param("isRead", String.valueOf(false))
                        .param("isNew", String.valueOf(false))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link NotificationController#countNotificationsByCustomerId}
     */
    @Test
    public void countNotificationsByCustomerId() throws Exception {
        when(notificationController.countNotificationsByCustomerId("U0000000000001")).thenReturn(50);
        mockMvc.perform(get(path + "countNotificationsByCustomerId")
                        .param("customerId", "U0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }


    /**
     * {@link NotificationController#getNumberOfNewNotificationsByCustomerId}
     */
    @Test
    public void getNumberOfNewNotificationsByCustomerId() throws Exception {

        when(notificationController.getNumberOfNewNotificationsByCustomerId("U0000000000001")).thenReturn(2);
        mockMvc.perform(get(path + "getNumberOfNewNotificationsByCustomerId")
                        .param("customerId", "U0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link NotificationController#getNotificationsByProviderId}
     */
    @Test
    public void getNotificationsByProviderId() throws Exception {

        ArrayList<NotificationDto> notificationDtos = new ArrayList<>();
        notificationDtos.add(notificationDto2);
        notificationDtos.add(notificationDto1);
        notificationDtos.add(notificationDto3);
        notificationDtos.add(notificationDto4);

        when(notificationController.getNotificationsByProviderId("P0000000000001", 0, 5)).thenReturn(notificationDtos);
        mockMvc.perform(get(path + "getNotificationsByProviderId")
                        .param("providerId", "P0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link NotificationController#getSpecificNotificationsByProviderId}
     */
    @Test
    public void getSpecificNotificationsByProviderId() throws Exception {
        ArrayList<NotificationDto> notificationDtos = new ArrayList<>();
        notificationDtos.add(notificationDto2);
        notificationDtos.add(notificationDto1);
        notificationDtos.add(notificationDto3);
        notificationDtos.add(notificationDto4);

        when(notificationController.getSpecificNotificationsByProviderId("P0000000000001", false, false, false,0, 5)).thenReturn(notificationDtos);
        mockMvc.perform(get(path + "getSpecificNotificationsByProviderId")
                        .param("providerId", "P0000000000001")
                        .param("isAccept", String.valueOf(false))
                        .param("isRead", String.valueOf(false))
                        .param("isNew", String.valueOf(false))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]").exists())
                .andExpect(jsonPath("$[*].id").isNotEmpty());
    }

    /**
     * {@link NotificationController#countNotificationsByProviderId}
     */
    @Test
    public void countNotificationsByProviderId() throws Exception {
        when(notificationController.countNotificationsByProviderId("P0000000000001")).thenReturn(50);
        mockMvc.perform(get(path + "countNotificationsByProviderId")
                        .param("providerId", "P0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link NotificationController#getNumberOfNewNotificationsByProviderId}
     */
    @Test
    public void getNumberOfNewNotificationsByProviderId() throws Exception {

        when(notificationController.getNumberOfNewNotificationsByProviderId("P0000000000001")).thenReturn(1);
        mockMvc.perform(get(path + "getNumberOfNewNotificationsByProviderId")
                        .param("providerId", "P0000000000001")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    /**
     * {@link NotificationController#updateNotification}
     */
    @Test
    public void updateNotification() throws Exception {
        notificationDto1.setMessage("Salut mon Bro");

        String json = new ObjectMapper().writeValueAsString(notificationDto1);

        mockMvc.perform(put(path + "updateNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());
    }

    /**
     * {@link NotificationController#deleteNotificationById}
     */
    @Test
    public void deleteNotificationById() throws Exception {
        mockMvc.perform(delete(path + "deleteNotificationById")
                        .param("id", "1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}