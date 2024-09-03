import React, { useState } from 'react';
import { generateImage } from '../services/api';

function ImageDisplay({ selectedImageModel }) {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      const url = await generateImage(selectedImageModel, prompt);
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="image-display">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter image prompt..."
        />
        <button type="submit">Generate Image</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </div>
  );
}

export default ImageDisplay;