package com.ff_fetch.fetch.repository;

import com.ff_fetch.fetch.Model.itemList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<itemList, Long> {
    itemList findByUID(Integer UID);
}
