package com.ff_fetch.fetch.service;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.dto.UserDto;

import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);
    User findUserByUID(Integer UID);

    User findUserByEmail(User Email);

    List<UserDto> findAllUsers();
}
