package com.example.springsocial.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import java.io.Serializable;

@Data
public class UserDto implements Serializable {
    private final Long id;
    private final String userName;
    @Email
    private final String email;
    private final String imageUrl;
}
