package com.PDLB.PPE.API.service;

import com.PDLB.PPE.API.entity.User;
import com.PDLB.PPE.API.repository.UserRepository;
import com.PDLB.PPE.DTO.mapper.UserMapper;
import com.PDLB.PPE.DTO.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * This service class provides methods for managing users and their associated data.
 */
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ProviderService providerService;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RoleService roleService;
    @Autowired
    private LanguageService languageService;

    /**
     * Loads a user by their username and returns a UserDto object.
     *
     * @param username The username of the user to be loaded.
     * @return A UserDto object representing the user with the provided username.
     * @throws UsernameNotFoundException if the user with the given username is not found.
     */
    @Override
    public UserDto loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.loadUserByUsername(username);
        if(user != null){
            return objectCreator(user);
        }
        throw new UsernameNotFoundException("Username or password invalid");
    }

    /**
     * Creates a UserDto object from the given User object and additional related data.
     *
     * @param user The User object to be converted into a UserDto.
     * @return A UserDto object representing the input user with additional related data.
     */
    private UserDto objectCreator(User user) {
        return userMapper.toDto(user,
                roleService.getRoleById(user.getRole()),
                languageService.getLanguageById(user.getLanguage()),
                (user.getRole() == 1 ? customerService.getCustomerById(user.getId()).getFullName():providerService.getProviderById(user.getId()).getName())
                );
    }
}