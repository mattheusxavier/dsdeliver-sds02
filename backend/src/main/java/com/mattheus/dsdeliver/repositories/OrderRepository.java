package com.mattheus.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mattheus.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}


