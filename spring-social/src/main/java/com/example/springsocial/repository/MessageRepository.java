package com.example.springsocial.repository;

import com.example.springsocial.model.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Messages, Long> {

}
