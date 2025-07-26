package com.ecommerce.chatbot.service;

import com.ecommerce.chatbot.model.Product;
import com.ecommerce.chatbot.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepo;

    public List<Product> getTop5() {
        return productRepo.findTop5ByOrderByQuantitySoldDesc();
    }

    public int getStock(String name) {
        Product p = productRepo.findByNameIgnoreCase(name);
        return p != null ? p.getStock() : -1;
    }
}