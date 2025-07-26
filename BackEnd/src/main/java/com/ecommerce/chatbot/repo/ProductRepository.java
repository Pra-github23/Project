package com.ecommerce.chatbot.repo;

import com.ecommerce.chatbot.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop5ByOrderByQuantitySoldDesc();
    Product findByNameIgnoreCase(String name);
}