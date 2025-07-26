package com.ecommerce.chatbot.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class OrderStatus {
    @Id
    private Long id;
    private String status;
}