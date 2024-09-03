const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const llmRoutes = require('./routes/llmRoutes');
const imageRoutes = require('./routes/imageRoutes');

// Use routes
app.use('/api/llm', llmRoutes);
app.use('/api/image', imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));