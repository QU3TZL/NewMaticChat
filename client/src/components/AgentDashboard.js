import React, { useState, useEffect } from 'react';
import { listAgents } from '../services/api';

function AgentDashboard({ onSelectAgent }) {
  const [agents, setAgents] = useState({ live: [], drafts: [] });

  useEffect(() => {
    async function fetchAgents() {
      const agentList = await listAgents();
      // Separate live agents and drafts
      const live = agentList.filter(agent => agent.status === 'live');
      const drafts = agentList.filter(agent => agent.status === 'draft');
      setAgents({ live, drafts });
    }
    fetchAgents();
  }, []);

  return (
    <div className="agent-dashboard">
      <h2>NEWMATIC AGENTS <button>+</button></h2>
      <div className="agent-tabs">
        <button>LIVE</button>
        <button>DRAFTS</button>
      </div>
      {agents.live.map(agent => (
        <div key={agent.id} className="agent-card" onClick={() => onSelectAgent(agent.id)}>
          <h3>{agent.name}</h3>
          <p>LLM: {agent.model}</p>
          <p>Image Gen: {agent.imageModel}</p>
          <p>Users: {agent.users}</p>
          <p>Cost: ${agent.cost}</p>
        </div>
      ))}
      {/* Similar mapping for drafts */}
    </div>
  );
}

export default AgentDashboard;