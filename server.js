import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import careersRoutes from './routes/careers.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to arutis_db successfully');
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careersRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Arutis Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
