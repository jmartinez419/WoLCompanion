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
@Table(name="itemList")
public class itemList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long ILID;
    @Column(nullable=false)
    String category;
    @Column(nullable = false)
    Integer ItemID;
    @Column
    Integer UID;
    @OneToMany(mappedBy = "UID")
    List<User> itemsList = new ArrayList<>();

    public itemList(Long ILID, String category, Integer itemID, List<User> itemsList) {
        this.ILID = ILID;
        this.category = category;
        ItemID = itemID;
        this.itemsList = itemsList;
    }
}
