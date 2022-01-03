package com.example.springsocial.mappers;

import com.example.springsocial.dto.UserDto;
import com.example.springsocial.model.User;

import java.util.List;

public interface UserMapper {
    List<UserDto> toUserDTOs(List<User> users);
    UserDto toUserDTO(User user);
    User toUser(UserDto userDto);
}
