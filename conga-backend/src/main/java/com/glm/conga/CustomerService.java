package com.glm.conga;

import java.util.List;

public interface CustomerService {

    Customer create(Customer user);

    Customer delete(int id);

    List<Customer> findAll();

    Customer findById(int id);

    Customer update(Customer user);
}
