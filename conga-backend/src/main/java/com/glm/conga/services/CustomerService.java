package com.glm.conga.services;

import java.util.List;

import com.glm.conga.models.Customer;

public interface CustomerService {

    Customer create(Customer user);

    Customer delete(int id);

    List<Customer> findAll();

    Customer findById(int id);

    Customer update(Customer user);
}
