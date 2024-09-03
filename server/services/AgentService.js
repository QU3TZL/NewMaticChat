const fs = require('fs').promises;
const path = require('path');

class AgentService {
  static async getAgent(agentId) {
    const filePath = path.join(__dirname, '..', 'data', 'agents', `${agentId}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  }

  static async saveAgent(agentConfig) {
    const filePath = path.join(__dirname, '..', 'data', 'agents', `${agentConfig.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(agentConfig, null, 2));
    return agentConfig;
  }

  static async listAgents() {
    const dirPath = path.join(__dirname, '..', 'data', 'agents');
    const files = await fs.readdir(dirPath);
    return files.map(file => path.parse(file).name);
  }
}

module.exports = AgentService;