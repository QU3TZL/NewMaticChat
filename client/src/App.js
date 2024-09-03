import React, { useState } from 'react';
import AgentDashboard from './components/AgentDashboard';
import AgentCreator from './components/AgentCreator';
import ChatInterface from './components/ChatInterface';
import './styles/App.css';

function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="App">
      <AgentDashboard onSelectAgent={setSelectedAgent} />
      <AgentCreator selectedAgent={selectedAgent} />
      <ChatInterface selectedAgent={selectedAgent} />
    </div>
  );
}

export default App;