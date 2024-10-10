package com.ff_fetch.fetch.impl;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.Model.itemList;
import com.ff_fetch.fetch.dto.ItemDto;
import com.ff_fetch.fetch.dto.UserDto;
import com.ff_fetch.fetch.repository.ItemRepository;
import com.ff_fetch.fetch.repository.UserRepository;
import com.ff_fetch.fetch.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.javapoet.ClassName;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ItemRepository itemRepository;
    private PasswordEncoder passwordEncoder;
    private final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    public UserServiceImpl(UserRepository userRepository, ItemRepository itemRepository,
                           PasswordEncoder passwordEncoder){
        super();
        this.userRepository = userRepository;
        this.itemRepository = itemRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void saveUser(UserDto userDto){
        User user = new User();

        user.setUser(userDto.getUser());
        user.setEmail(userDto.getEmail());
        user.setCharacterId(userDto.getCharacterId());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }

    public void saveCharacterId(UserDto userDto){
        User user = findUserByEmail(userDto.getEmail());

        user.setCharacterId(userDto.getCharacterId());
        userRepository.save(user);
    }

    public void saveItem(ItemDto itemDto){
        itemList item = new itemList();

        item.setUID(itemDto.getUID());
        item.setItemID(itemDto.getItemId());
        item.setCategory(itemDto.getCategory());
        itemRepository.save(item);
    }

    public List <itemList> findItemByUID(Integer UID){
        List<itemList> Item = itemRepository.findAll();
        List<itemList> items = Item.stream().filter(Temp -> Temp.getUID().equals(UID)).collect(Collectors.toList());
        return items;
    }

    public User findUserByEmail(String Email) {
        List<User>Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getEmail().equals(Email)).findFirst().get();
        return user;
    }

    public User Login(String Email, String Password){
        User user = findUserByEmail(Email);

        if(passwordEncoder.matches(Password,user.getPassword())){
            logger.info("Login Successful");
            return  user;
        }else logger.warn("Login unsuccessfula");

        return null;
    }


    // don't need
    @Override
    public List<UserDto> findAllUsers() {
        return List.of();
    }
    @Override
    public User findUserByUID(Integer UID) {
        return null;
    }




//    private itemList checkItemListExist() {
//        itemList itemlist = new itemList();
//        itemlist.setCategory(itemlist.getCategory());
//        itemlist.setItemID(itemlist.getItemID());
//        itemlist.setUID(itemlist.getUID());
//        return itemlist;
//    }
}
