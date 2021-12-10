package com.example.springsocial.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto implements Serializable {
    @JsonProperty("id")
    private Long id;
    @JsonProperty("userName")
    private String userName;

    @Email
    @JsonProperty("email")
    private String email;
    @JsonProperty("imageUrl")
    private String imageUrl;
}
