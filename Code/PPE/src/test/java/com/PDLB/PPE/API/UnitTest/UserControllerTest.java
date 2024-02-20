package com.PDLB.PPE.API.UnitTest;

import com.PDLB.PPE.API.controller.UserController;
import com.PDLB.PPE.API.security.UserInfoResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Unit testing of the {@link UserController}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(UserController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class UserControllerTest {

    private final String path = "http://localhost:8080/api/auth/";
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserController userController;
    private UserInfoResponse user1;

    @BeforeEach
    public void setUp() {
        user1 = new UserInfoResponse("1", "Customer", Collections.singletonList("USER"), "FR","JEAN");
    }

    /**
     * {@link UserController#authenticateUser}
     */
    @Test
    public void authenticateUser() throws Exception {
        when(userController.authenticateUser("Customer", "Customer")).thenReturn(ResponseEntity.ok(user1));

        mockMvc.perform(post(path + "signin")
                        .param("username", "Customer")
                        .param("password", "Customer"))
                .andExpect(jsonPath("$").exists());

    }

    /**
     * {@link UserController#logoutUser}
     */
    @Test
    @Order(2)
    public void logoutUser() throws Exception {
        mockMvc.perform(post(path + "signout"))
                .andExpect(status().isOk())
                .andReturn();
    }
}