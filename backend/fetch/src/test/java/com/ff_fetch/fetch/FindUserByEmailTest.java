package com.ff_fetch.fetch;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.ff_fetch.fetch.Model.User;
import com.ff_fetch.fetch.impl.UserServiceImpl;
import com.ff_fetch.fetch.repository.UserRepository;
import com.ff_fetch.fetch.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

public class FindUserByEmailTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService; // Assuming this is the class containing findUserByEmail

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindUserByEmail_UserExists() {
        // Arrange
        String email = "test@example.com";
        User user = new User(); // Assuming a default constructor
        user.setEmail(email);

        List<User> users = Arrays.asList(user);
        when(userRepository.findAll()).thenReturn(users);

        // Act
        User foundUser = userService.findUserByEmail(email);

        // Assert
        assertNotNull(foundUser);
        assertEquals(email, foundUser.getEmail());
    }

    @Test
    public void testFindUserByEmail_UserDoesNotExist() {
        // Arrange
        String email = "nonexistent@example.com";
        List<User> users = Arrays.asList(new User("test@example.com")); // User with different email
        when(userRepository.findAll()).thenReturn(users);

        // Act & Assert
        Exception exception = assertThrows(NoSuchElementException.class, () -> {
            userService.findUserByEmail(email);
        });

        assertEquals("No value present", exception.getMessage());
    }
}

