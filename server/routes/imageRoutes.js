const express = require('express');
const router = express.Router();
const ImageService = require('../services/ImageService');

router.post('/generate', async (req, res) => {
  const { model, prompt } = req.body;
  try {
    const imageUrl = await ImageService.generate(model, prompt);
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;