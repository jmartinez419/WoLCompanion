package com.ff_fetch.fetch.dto;

import com.ff_fetch.fetch.Model.itemList;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class UserDto {
    private Integer UID;

    @NotEmpty(message = "Email should not be empty")
    @Email
    private String Email;

    @NotEmpty(message = "Password should not be empty")
    private String Password;

    private Integer CharacterID;

    private String User;

    private itemList itemList;

    public itemList getItemList(){
        return itemList;
    }

    public void setItemList(itemList itemlist){
        itemList = itemlist;
    }

    public Integer getUID() {
        return UID;
    }

    public void setUID(Integer UID) {
        this.UID = UID;
    }

    public  String getEmail() {
        return Email;
    }

    public void setEmail (String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public Integer getCharacterID() {
        return CharacterID;
    }

    public void setCharacterID(Integer characterID) {
        CharacterID = characterID;
    }

    public String getUser(){
        return User;
    }
    public void setUser(String user){
        User = user;
    }
}
