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
        return MessagesDto
                .builder()
                .user(messages.getUser())
                .message(messages.getMessage())
                .lastModifiedDate(messages.getLastModifiedDate())
                .build();
    }


    @Override
    public Messages toMessage(MessagesDto messagesDto) {
        return Messages
                .builder()
                .message(messagesDto.getMessage())
                .user(messagesDto.getUser())
                .lastModifiedDate(messagesDto.getLastModifiedDate())
                .build();
    }
}

