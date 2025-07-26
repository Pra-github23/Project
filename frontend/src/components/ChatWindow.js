import React, { useContext, useEffect } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageList from './MessageList';
import UserInput from './UserInput';
import ConversationHistory from './ConversationHistory';

const ChatWindow = () => {
  const { loadConversations } = useContext(ChatContext);

  useEffect(() => {
    loadConversations();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ConversationHistory />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <MessageList />
        <UserInput />
      </div>
    </div>
  );
};

export default ChatWindow;