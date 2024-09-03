const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

class LLMService {
  static async generate(agentConfig, prompt) {
    const messages = [
      { role: 'system', content: agentConfig.systemPrompt },
      { role: 'user', content: prompt }
    ];

    if (agentConfig.localKnowledge) {
      messages.unshift({ role: 'system', content: `Local knowledge: ${agentConfig.localKnowledge}` });
    }

    const response = await openai.chat.completions.create({
      model: agentConfig.model || 'gpt-3.5-turbo',
      messages: messages,
    });

    return response.choices[0].message.content;
  }
}

module.exports = LLMService;