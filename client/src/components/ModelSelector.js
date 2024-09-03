import React from 'react';

function ModelSelector({ selectedLLM, setSelectedLLM, selectedImageModel, setSelectedImageModel }) {
  return (
    <div className="model-selector">
      <div>
        <label>LLM Model:</label>
        <select value={selectedLLM} onChange={(e) => setSelectedLLM(e.target.value)}>
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="gpt-4">GPT-4</option>
        </select>
      </div>
      <div>
        <label>Image Generation Model:</label>
        <select value={selectedImageModel} onChange={(e) => setSelectedImageModel(e.target.value)}>
          <option value="dall-e">DALL-E</option>
          <option value="stable-diffusion">Stable Diffusion</option>
        </select>
      </div>
    </div>
  );
}

export default ModelSelector;