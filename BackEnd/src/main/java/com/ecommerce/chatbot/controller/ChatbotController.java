package com.ecommerce.chatbot.controller;

import com.ecommerce.chatbot.service.ProductService;
import com.ecommerce.chatbot.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    @Autowired
    ProductService productService;

    @Autowired
    OrderService orderService;

    @GetMapping("/top-products")
    public Object getTopProducts() {
        return productService.getTop5();
    }

    @GetMapping("/order-status/{id}")
    public String getOrderStatus(@PathVariable Long id) {
        return orderService.getOrderStatus(id);
    }

    @GetMapping("/stock")
    public String getStock(@RequestParam String name) {
        int stock = productService.getStock(name);
        return stock == -1 ? "Product not found." : name + " has " + stock + " items left in stock.";
    }
}