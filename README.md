# E-commerce Chatbot (Full Stack)

This is a full-stack chatbot web application for an e-commerce clothing site. It uses:

- **React** for the frontend
- **Spring Boot** for the backend
- **PostgreSQL** for the database
- **Docker Compose** for orchestration

## 🔧 Setup Instructions

### Prerequisites

- Docker
- Docker Compose

### Steps

1. Clone the repository
2. Place your JAR file in `backend/target/chatbot-0.0.1-SNAPSHOT.jar`
3. Build and run the application:

```bash
docker-compose up --build
```

4. Access the frontend at: `http://localhost:3000`
5. Backend API runs at: `http://localhost:8080`

## 🔁 Features

- Conversational chatbot for product, order and stock queries
- Persistent chat history per user session
- Conversation history panel
- LLM-ready integration