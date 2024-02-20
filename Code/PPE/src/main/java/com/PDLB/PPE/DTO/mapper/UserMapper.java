package com.PDLB.PPE.DTO.mapper;

import com.PDLB.PPE.API.entity.User;
import com.PDLB.PPE.DTO.model.LanguageDto;
import com.PDLB.PPE.DTO.model.RoleDto;
import com.PDLB.PPE.DTO.model.UserDto;
import org.springframework.stereotype.Component;

/**
 * The UserMapper class provides mapping methods between User and UserDto objects.
 */
@Component
public class UserMapper {

    /**
     * Maps a User object to a UserDto object.
     *
     * @param user the User object to map
     * @return a UserDto object containing the same data as the input User object
     */
    public UserDto toDto(User user, RoleDto roleDto, LanguageDto languageDto, String name) {
        if (user == null)
            return null;

        return new UserDto(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                roleDto.getValue(),
                languageDto.getValue(),
                name
        );
    }
}
