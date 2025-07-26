package com.ecommerce.chatbot.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    private Long id;
    private String name;
    private String category;
    private int quantitySold;
    private int stock;
}