package com.ff_fetch.fetch.repository;

import com.ff_fetch.fetch.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
   User findByUID(Integer UID);
}
