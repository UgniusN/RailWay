package lt.codeacademy.rest.repositories;

import lt.codeacademy.rest.entities.Travel;
import lt.codeacademy.rest.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findUserByUsername(String username);
}

