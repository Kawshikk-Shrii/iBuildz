import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRouter from './auth';

// Load environment variables
dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api/v1/auth', authRouter);

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 