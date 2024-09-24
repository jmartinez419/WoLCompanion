package com.ff_fetch.fetch.controller;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.dto.UserDto;
import com.ff_fetch.fetch.impl.UserServiceImpl;
import com.ff_fetch.fetch.repository.ItemRepository;
import com.ff_fetch.fetch.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class userController extends UserServiceImpl {

    public userController(UserRepository userRepository, ItemRepository itemRepository, PasswordEncoder passwordEncoder) {
        super(userRepository, itemRepository, passwordEncoder);
    }

    @PostMapping("/register")
    public void printData(@RequestBody UserDto user){

        saveUser(user);
        System.out.println("Printing the user data" + user);
    }

    @PostMapping("/Login")
    public void getUser(@RequestBody UserDto user){
        Login(user.getEmail(),user.getPassword());
    }

//    @GetMapping("/login"){
//        public User Login()
//    }
}
