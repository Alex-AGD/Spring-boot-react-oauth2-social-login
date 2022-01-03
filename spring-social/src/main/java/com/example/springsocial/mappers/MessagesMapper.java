package com.example.springsocial.mappers;

import com.example.springsocial.dto.MessagesDto;
import com.example.springsocial.model.Messages;

import java.util.List;

public interface MessagesMapper {
    List<MessagesDto> toMessagesDto(List<Messages> messages);
    MessagesDto toMessageDto(Messages messages);
    Messages toMessage(MessagesDto messagesDto);
}
