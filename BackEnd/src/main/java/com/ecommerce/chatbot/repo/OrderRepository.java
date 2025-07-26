package com.ecommerce.chatbot.repo;

import com.ecommerce.chatbot.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderStatus, Long> {}