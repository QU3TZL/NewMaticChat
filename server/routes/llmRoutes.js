const express = require('express');
const router = express.Router();
const LLMService = require('../services/LLMService');
const AgentService = require('../services/AgentService');

router.post('/generate', async (req, res) => {
  const { agentId, prompt } = req.body;
  try {
    const agentConfig = await AgentService.getAgent(agentId);
    const response = await LLMService.generate(agentConfig, prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/agent', async (req, res) => {
  const agentConfig = req.body;
  try {
    const savedAgent = await AgentService.saveAgent(agentConfig);
    res.json(savedAgent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/agents', async (req, res) => {
  try {
    const agents = await AgentService.listAgents();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;