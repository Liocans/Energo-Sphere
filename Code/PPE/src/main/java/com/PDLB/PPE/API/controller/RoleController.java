package com.PDLB.PPE.API.controller;

import com.PDLB.PPE.API.service.RoleService;
import com.PDLB.PPE.DTO.model.RoleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * This Controller allows us to use different paths to call specific methods linked to roles.
 */
@CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true", maxAge = 3600)
@RestController
@RequestMapping(path = "api/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    /**
     * Endpoint that retrieves all roles.
     *
     * @return An ArrayList of RoleDto objects representing the roles.
     */
    @GetMapping("/getAllRoles")
    public ArrayList<RoleDto> getAllRoles(){
        return roleService.getAllRoles();
    }

    /**
     * Endpoint that retrieves a role by its ID.
     *
     * @param id The ID of the role to retrieve.
     * @return The RoleDto object representing the role.
     */
    @GetMapping("/getRoleById")
    public RoleDto getRoleById(@RequestParam int id) {
        return roleService.getRoleById(id);
    }
}
