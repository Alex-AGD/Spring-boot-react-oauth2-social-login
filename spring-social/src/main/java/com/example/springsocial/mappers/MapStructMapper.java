package com.example.springsocial.mappers;

import com.example.springsocial.dto.MessagesDto;
import com.example.springsocial.dto.UserDto;
import com.example.springsocial.model.Messages;
import com.example.springsocial.model.User;


public interface MapStructMapper {
    UserDto userDto(User user);
    MessagesDto messagesDto(Messages messages);
    Messages messages(MessagesDto messagesDto);
}
