package com.glm.conga;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface CustomerRepository extends Repository<Customer, Integer> {

    void delete(Customer user);

    List<Customer> findAll();

    Customer findOne(int id);

    Customer save(Customer user);
}
