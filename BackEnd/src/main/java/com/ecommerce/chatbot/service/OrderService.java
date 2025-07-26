package com.ecommerce.chatbot.service;

import com.ecommerce.chatbot.repo.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepo;

    public String getOrderStatus(Long id) {
        return orderRepo.findById(id)
                .map(o -> o.getStatus())
                .orElse("Order ID not found.");
    }
}