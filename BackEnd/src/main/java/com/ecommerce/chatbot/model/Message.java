package com.ecommerce.chatbot.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String role; // user or ai
    private String content;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    private Conversation conversation;
}