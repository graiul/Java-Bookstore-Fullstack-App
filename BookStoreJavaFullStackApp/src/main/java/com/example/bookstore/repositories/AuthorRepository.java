// src/main/java/com/example/bookstore/repositories/AuthorRepository.java

package com.example.bookstore.repositories;

import com.example.bookstore.entities.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
