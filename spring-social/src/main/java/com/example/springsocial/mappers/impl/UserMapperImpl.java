package com.example.springsocial.mappers.impl;

import com.example.springsocial.dto.UserDto;
import com.example.springsocial.mappers.UserMapper;
import com.example.springsocial.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UserMapperImpl implements UserMapper {

    @Override
    public List<UserDto> toUserDTOs(List<User> users) {
        return users.stream()
                .filter(Objects::nonNull)
                .map(this::toUserDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto toUserDTO(User user) {
        UserDto userDTO = new UserDto();
        userDTO.setId(user.getId());
        userDTO.setUserName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setImageUrl(user.getImageUrl());
        return userDTO;
    }

    @Override
    public User toUser(UserDto userDto) {
        if (userDto == null) {
            return null;
        } else {
            User user = new User();
            user.setId(userDto.getId());
            user.setName(userDto.getUserName());
            user.setEmail(userDto.getEmail());
            user.setImageUrl(userDto.getImageUrl());
            return user;
        }
    }
}
