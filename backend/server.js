/**
 * Alumni Chatbot API Server
 * Express server for handling chatbot requests
 */
import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { initializeFirebase } from './services/firebase.js';
import chatbotRouter from './api/chatbot.js';

// Initialize Firebase
initializeFirebase();

// Log startup info
console.log('🚀 Starting Alumni Chatbot API');
console.log(`📦 Environment: ${config.nodeEnv}`);
console.log(`🔑 OpenAI API Key: ${config.openai.apiKey ? 'Present' : 'Missing'}`);

// Create Express app
const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/chatbot', chatbotRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(config.port, () => {
  console.log(`✅ Server running on port ${config.port}`);
});