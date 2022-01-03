package com.example.springsocial.mappers.impl;

import com.example.springsocial.dto.MessagesDto;
import com.example.springsocial.mappers.MessagesMapper;
import com.example.springsocial.model.Messages;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class MessagesMapperImpl implements MessagesMapper {
    @Override
    public List<MessagesDto> toMessagesDto(List<Messages> messages) {
        return messages.stream()
                .filter(Objects::nonNull)
                .map(this::toMessageDto)
                .collect(Collectors.toList());
    }

    @Override
    public MessagesDto toMessageDto(Messages messages) {
        MessagesDto toMessageDto = new MessagesDto();
        toMessageDto.setUser(messages.getUser());
        toMessageDto.setMessage(messages.getMessage());
        toMessageDto.setLastModifiedDate(messages.getLastModifiedDate());
        return toMessageDto;
    }


    @Override
    public Messages toMessage(MessagesDto messagesDto) {
        if (messagesDto == null) {
            return null;
        } else {
            Messages messages = new Messages();
            messages.setId(messagesDto.getId());
            messages.setMessage(messagesDto.getMessage());
            messages.setUser(messagesDto.getUser());
            messages.setLastModifiedDate(messagesDto.getLastModifiedDate());
            return messages;
        }
    }
}
