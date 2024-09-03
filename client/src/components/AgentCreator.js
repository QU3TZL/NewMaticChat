import React, { useState } from 'react';
import { saveAgent } from '../services/api';

function AgentCreator() {
  const [agentConfig, setAgentConfig] = useState({
    id: '',
    name: '',
    model: 'gpt-3.5-turbo',
    systemPrompt: '',
    localKnowledge: '',
    imagePrompt: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveAgent(agentConfig);
      alert('Agent saved successfully!');
    } catch (error) {
      console.error('Error saving agent:', error);
    }
  };

  const handleChange = (e) => {
    setAgentConfig({ ...agentConfig, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" value={agentConfig.id} onChange={handleChange} placeholder="Agent ID" required />
      <input name="name" value={agentConfig.name} onChange={handleChange} placeholder="Agent Name" required />
      <select name="model" value={agentConfig.model} onChange={handleChange}>
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
      </select>
      <textarea name="systemPrompt" value={agentConfig.systemPrompt} onChange={handleChange} placeholder="System Prompt" required />
      <textarea name="localKnowledge" value={agentConfig.localKnowledge} onChange={handleChange} placeholder="Local Knowledge" />
      <input name="imagePrompt" value={agentConfig.imagePrompt} onChange={handleChange} placeholder="Image Prompt" />
      <button type="submit">Save Agent</button>
    </form>
  );
}

export default AgentCreator;