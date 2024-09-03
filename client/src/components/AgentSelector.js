import React, { useState, useEffect } from 'react';
import { listAgents } from '../services/api';

function AgentSelector({ selectedAgent, setSelectedAgent }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchAgents() {
      const agentList = await listAgents();
      setAgents(agentList);
    }
    fetchAgents();
  }, []);

  return (
    <div className="agent-selector">
      <label>Select Agent:</label>
      <select value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)}>
        {agents.map(agent => (
          <option key={agent} value={agent}>{agent}</option>
        ))}
      </select>
    </div>
  );
}

export default AgentSelector;