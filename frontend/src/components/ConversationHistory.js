import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const ConversationHistory = () => {
  const { conversations, loadMessagesForConversation } = useContext(ChatContext);

  return (
    <div style={{ width: '250px', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>Past Chats</h3>
      {conversations.map((c) => (
        <div
          key={c.id}
          style={{ padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid #eee' }}
          onClick={() => loadMessagesForConversation(c.id)}
        >
          Conversation #{c.id}
        </div>
      ))}
    </div>
  );
};

export default ConversationHistory;