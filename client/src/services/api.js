const API_URL = '/api';

export async function generateLLMResponse(agentId, prompt) {
  const response = await fetch(`${API_URL}/llm/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ agentId, prompt }),
  });
  const data = await response.json();
  return data.response;
}

export async function listAgents() {
  const response = await fetch(`${API_URL}/llm/agents`);
  return await response.json();
}

export async function saveAgent(agentConfig) {
  const response = await fetch(`${API_URL}/llm/agent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(agentConfig),
  });
  return await response.json();
}

export async function generateImage(model, prompt) {
  const response = await fetch(`${API_URL}/image/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt }),
  });
  const data = await response.json();
  return data.imageUrl;
}