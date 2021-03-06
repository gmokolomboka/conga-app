package com.glm.conga.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.glm.conga.models.Customer;
import com.glm.conga.repository.CustomerRepository;
import com.glm.conga.services.CustomerService;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repository;

    @Override
    public Customer create(Customer user) {
        return repository.save(user);
    }

    @Override
    public Customer delete(int id) {
        Customer user = findById(id);
        if(user != null){
            repository.delete(user);
        }
        return user;
    }

    @Override
    public Customer findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Customer update(Customer user) {
        return repository.save(user);
    }

	@Override
	public List<Customer> findAll() {
		return repository.findAll();
	}
}
