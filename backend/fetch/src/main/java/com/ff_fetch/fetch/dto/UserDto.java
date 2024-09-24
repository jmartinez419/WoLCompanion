package com.ff_fetch.fetch.dto;

import com.ff_fetch.fetch.Model.itemList;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class UserDto {
    private Integer UID;

    @NotEmpty(message = "Email should not be empty")
    @Email
    private String Email;

    @NotEmpty(message = "Password should not be empty")
    private String Password;

    private int CharacterId;

    private String User;

    private itemList itemList;

}
