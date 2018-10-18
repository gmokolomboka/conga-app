# conga-app

conga-app is:

    - Conga-Backed (Springboot Application)
    - Spring DATA JPA to retrieve and store data in a relational database 
    - Conga-frontend uses [Angular 6](https://angular.io/) with [Redux (Reactive Extensions for Angular)](https://github.com/ngrx)


#Running conga-backend

mvn spring-boot:run

# Spring Boot

This expose RESTFull Web service: 

    - To retrieve all Customers - @GetMapping(“/api/customers)
    - To get details of specific customer - @GetMapping(“/api/customers/{id}”)
    - To delete a customer - @DeleteMapping(“/api/customers/{id}”)
    - To create a new Customer - @PostMapping(“/api/customers/{customer})
    - To update customer details - @PutMapping(“/api/customer/{id}”).

# Angular 6 and NgRx

In comming soon...

# Requesting with PostMan

    You can use [postman](https://www.getpostman.com/apps) to request Spring Boot Backend.
    [For more informations](https://www.getpostman.com/docs/v6/)