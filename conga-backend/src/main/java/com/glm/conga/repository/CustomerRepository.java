package com.glm.conga.repository;

import org.springframework.data.repository.Repository;

import com.glm.conga.models.Customer;

import java.util.List;

public interface CustomerRepository extends Repository<Customer, Integer> {

    void delete(Customer user);

    List<Customer> findAll();

    Customer findOne(int id);

    Customer save(Customer user);
}
