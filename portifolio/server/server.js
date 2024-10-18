import express from 'express';  
import mongoose from 'mongoose';  
import bodyParser from 'body-parser';  

import contactRoutes from './routes/contact.routes.js';
import userRoutes from './routes/user.routes.js';
mongoose.set('debug', true);

const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());
console.log('Attempting to connect to MongoDB...');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://webAppDev:webappdev@webappdevassignment02.maz3t.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=WebAppDevAssignment02')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// Root route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
  });
  
  // Use routes for contacts and users
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});