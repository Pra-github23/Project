import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);

  const sendMessage = async (text) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: 'user', content: text }, { role: 'ai', content: data.response }]);
  };

  const loadConversations = async () => {
    const res = await fetch('/api/conversations');
    const data = await res.json();
    setConversations(data);
  };

  const loadMessagesForConversation = async (id) => {
    const res = await fetch(`/api/conversations/${id}`);
    const data = await res.json();
    setMessages(data.messages);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, conversations, loadConversations, loadMessagesForConversation }}>
      {children}
    </ChatContext.Provider>
  );
};