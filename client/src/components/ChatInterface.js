import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { generateLLMResponse } from '../services/api';

function ChatInterface({ selectedAgent }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await generateLLMResponse(selectedAgent, input);
      const assistantMessage = { role: 'assistant', content: response };
      setMessages([...messages, userMessage, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
    }
  };

  return (
    <div className="chat-interface">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInterface;