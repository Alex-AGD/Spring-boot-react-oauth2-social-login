package com.example.springsocial.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MessagesDto implements Serializable {
    private long id;

    @JsonBackReference
    private String message;

    private UserDto user;

    private LocalDateTime createdDate;

    private Timestamp lastModifiedDate;
}
