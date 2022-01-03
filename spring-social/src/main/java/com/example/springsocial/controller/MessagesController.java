package com.example.springsocial.controller;


import com.example.springsocial.dto.MessagesDto;
import com.example.springsocial.mappers.MessagesMapper;
import com.example.springsocial.model.Messages;
import com.example.springsocial.repository.MessageRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Slf4j
@RestController
@RequestMapping(value = "/messages")
    @CrossOrigin(origins = "http://localhost:8081")
    public class MessagesController {
    private final MessageRepository messageRepository;
    private final MessagesMapper messagesMapper;

    private static final Logger logger = LoggerFactory.getLogger(MessagesController.class);

    public MessagesController(MessageRepository messageRepository, MessagesMapper messagesMapper) {
        this.messageRepository = messageRepository;
        this.messagesMapper = messagesMapper;
    }

    @GetMapping
    public ResponseEntity<List<MessagesDto>> getAllMessages(@RequestParam(required = false) String title) {
        try {
            List<Messages> messagesList = new ArrayList<>();
            messageRepository.findAll();
            if (title == null)
                messagesList.addAll(messageRepository.findAll());
            if (messagesList.isEmpty()) {
                new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            logger.debug("ListUsersL {}",  messagesList);
            return ResponseEntity.ok(messagesMapper.toMessagesDto(messagesList));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping
    public ResponseEntity<Messages> createMessage(@RequestBody MessagesDto messagesDto) {
        try {
            Messages toMessage = messagesMapper.toMessage(messagesDto);
            return ResponseEntity.ok(messageRepository.save(toMessage));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
