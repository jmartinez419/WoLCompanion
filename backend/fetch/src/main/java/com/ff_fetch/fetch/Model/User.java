package com.ff_fetch.fetch.Model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer UID;
    @Column(nullable = false)
    String User;
    @Column(nullable = false, unique=true)
    String Email;
    @Column(nullable = false)
    String Password;
    @Column
    int CharacterId;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable (name = "user_itemList",
    joinColumns = {@JoinColumn(name = "User_UID", referencedColumnName = "UID")},
    inverseJoinColumns = {@JoinColumn(name="itemList_UID", referencedColumnName = "UID")})
    public List<itemList> Items = new ArrayList<>();


    public User(Integer UID, String user, String email, String password, int characterId, List<itemList> items) {
        this.UID = UID;
        User = user;
        Email = email;
        Password = password;
        CharacterId = characterId;
        Items = items;
    }
}
