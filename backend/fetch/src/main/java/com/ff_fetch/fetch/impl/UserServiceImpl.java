package com.ff_fetch.fetch.impl;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.Model.itemList;
import com.ff_fetch.fetch.dto.UserDto;
import com.ff_fetch.fetch.repository.ItemRepository;
import com.ff_fetch.fetch.repository.UserRepository;
import com.ff_fetch.fetch.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
        user.setItems(userDto.get);
        user.setEmail(userDto.getEmail());
        user.setCharacterId(userDto.getCharacterID());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }
    private itemList checkItemListExist() {
        itemList itemlist = new itemList();
        itemlist.setCategory(itemlist.getCategory());
        itemlist.setItemID(itemlist.getItemID());
        itemlist.setUID(itemlist.getUID());
    }
}
