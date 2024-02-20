package com.PDLB.PPE.API.IntegrationTest;

import com.PDLB.PPE.API.controller.NotificationController;
import com.PDLB.PPE.DTO.model.NotificationDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.annotations.OnDelete;
import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Integration testing of the {@link NotificationController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class NotificationControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @LocalServerPort
    private int port;
    private String path;
    private MvcResult response;
    private static NotificationDto notificationDto1, notificationDto2, notificationDto3, notificationDto4;

    @BeforeAll
    public static void setUp2() {
        notificationDto1 = new NotificationDto(1,"U0000000000001", "P0000000000001", "Salut", true, true, true);
        notificationDto2 = new NotificationDto(2,"U0000000000001", "P0000000000001", "Salut ça va", false, true, false);
        notificationDto3 = new NotificationDto(3,"U0000000000001", "P0000000000001", "Salut, ça va", false, false, true);
        notificationDto4 = new NotificationDto(4,"U0000000000001", "P0000000000001", "Salut, je suis pas chez moi", false, false, false);
    }

    @BeforeEach
    public void setUp1() {
        path = "http://localhost:" + port + "/api/notification/";
    }

    /**
     * {@link NotificationController#createNotification}
     */
    @Test
    @Order(1)
    public void createNotification() throws Exception {

        response = mockMvc.perform(post(path + "createNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(notificationDto1)))
                .andExpect(status().isCreated())
                .andReturn();

        notificationDto1.setId(Integer.parseInt(response.getResponse().getContentAsString()));

        response = mockMvc.perform(post(path + "createNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(notificationDto2)))
                .andExpect(status().isCreated())
                .andReturn();

        notificationDto2.setId(Integer.parseInt(response.getResponse().getContentAsString()));

        response = mockMvc.perform(post(path + "createNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(notificationDto3)))
                .andExpect(status().isCreated())
                .andReturn();

        notificationDto3.setId(Integer.parseInt(response.getResponse().getContentAsString()));

        response = mockMvc.perform(post(path + "createNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(notificationDto4)))
                .andExpect(status().isCreated())
                .andReturn();

        notificationDto4.setId(Integer.parseInt(response.getResponse().getContentAsString()));
    }

    /**
     * {@link NotificationController#getNotificationsByCustomerId}
     */
    @Test
    @Order(2)
    public void getNotificationsByCustomerId() throws Exception {

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
    @Order(3)
    public void getSpecificNotificationsByCustomerId() throws Exception {

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
    @Order(4)
    public void countNotificationsByCustomerId() throws Exception {

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
    @Order(5)
    public void getNumberOfNewNotificationsByCustomerId() throws Exception {

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
    @Order(6)
    public void getNotificationsByProviderId() throws Exception {

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
    @Order(7)
    public void getSpecificNotificationsByProviderId() throws Exception {

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
    @Order(8)
    public void countNotificationsByProviderId() throws Exception {
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
    @Order(9)
    public void getNumberOfNewNotificationsByProviderId() throws Exception {

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
    @Order(10)
    public void updateNotification() throws Exception {
        notificationDto1.setMessage("Salut mon Bro");

        mockMvc.perform(put(path + "updateNotification")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(notificationDto1)))
                .andExpect(status().isOk());
    }

    /**
     * {@link NotificationController#deleteNotificationById}
     */
    @Test
    @Order(11)
    public void deleteNotificationById() throws Exception {

        mockMvc.perform(delete(path + "deleteNotificationById")
                        .param("id", String.valueOf(notificationDto1.getId()))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(delete(path + "deleteNotificationById")
                        .param("id", String.valueOf(notificationDto2.getId()))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(delete(path + "deleteNotificationById")
                        .param("id", String.valueOf(notificationDto3.getId()))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(delete(path + "deleteNotificationById")
                        .param("id", String.valueOf(notificationDto4.getId()))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());


    }
}