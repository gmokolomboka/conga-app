# conga-banckend

Is a Sppring Boot Application.
I integrate [H2 database](http://www.h2database.com/html/main.html) 
Note:  H2 is in the embedded mode.

#Running conga-backend

mvn spring-boot:run

# Spring Boot

This expose RESTFull Web service: 

    - To retrieve all Users - @GetMapping(“/users”)
    - To get details of specific user - @GetMapping(“/users/{id}”)
    - To delete a user - @DeleteMapping(“/users/{id}”)
    - To create a new User - @PostMapping(“/users/user”)
    - To update user details - @PutMapping(“/users/{id}”).

# Requesting with PostMan

    You can use [postman](https://www.getpostman.com/apps) to request Spring Boot Backend.
    [For more informations] (https://www.getpostman.com/docs/v6/)
