import React from 'react';

const Message = ({ role, content }) => {
  const isUser = role === 'user';
  return (
    <div style={{
      textAlign: isUser ? 'right' : 'left',
      margin: '0.5rem 0',
      color: isUser ? '#007bff' : '#333'
    }}>
      <strong>{isUser ? 'You' : 'AI'}:</strong> {content}
    </div>
  );
};

export default Message;