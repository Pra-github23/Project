import React, { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';

const UserInput = () => {
  const { sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', display: 'flex' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, marginRight: '1rem' }}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInput;