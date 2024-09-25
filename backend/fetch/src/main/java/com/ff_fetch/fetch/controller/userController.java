package com.ff_fetch.fetch.controller;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.Model.itemList;
import com.ff_fetch.fetch.dto.ItemDto;
import com.ff_fetch.fetch.dto.UserDto;
import com.ff_fetch.fetch.impl.UserServiceImpl;
import com.ff_fetch.fetch.repository.ItemRepository;
import com.ff_fetch.fetch.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;


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
    public User getUser(@RequestBody UserDto user){

       return Login(user.getEmail(),user.getPassword());

    }

    @PostMapping("/addItem")
    public void addToList(@RequestBody ItemDto item){
        saveItem(item);
        System.out.println("Item info" + item);
    }

    @GetMapping("/getItems/{item}")
    public List<itemList> getItems(@PathVariable Integer item){
        System.out.println(item);
        return findItemByUID(item);
    }
}
