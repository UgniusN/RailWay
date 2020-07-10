package lt.codeacademy.rest.controller;


import lombok.Data;
import lt.codeacademy.rest.entities.Role;
import lt.codeacademy.rest.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController {


    @GetMapping
    public UserDto getUser(@AuthenticationPrincipal User user) {
        return new UserDto(user);
    }


    @Data
    private static class UserDto {
        private String name;
        private String lastName;
        private Set<String> roles;

        UserDto(User user) {
            this.name = user.getName();
            this.lastName = user.getLastName();
            this.roles = user.getRoles().stream().map(Role::getRole).collect(Collectors.toSet());
        }
    }

}
