package com.ff_fetch.fetch.impl;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.dto.UserDto;
import com.ff_fetch.fetch.repository.ItemRepository;
import com.ff_fetch.fetch.repository.UserRepository;
import com.ff_fetch.fetch.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ItemRepository itemRepository;
    private PasswordEncoder passwordEncoder;

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
//    @Override
//    public User findUserByEmail(User Email) {
//
//        return Email;
//    }

    public User findUserByEmail(String Email) {
        List<User>Users = userRepository.findAll();
        User user = Users.stream().filter(Temp -> Temp.getEmail().equals(Email)).findFirst().get();
        return user;
    }

    public User Login(String Email, String Password){
        User user = findUserByEmail(Email);

        if(passwordEncoder.matches(Password,user.getPassword())){
            System.out.println("Login Successful");
            return  user;
        }

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


    @Override
    public User findUserByEmail(User Email) {
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
