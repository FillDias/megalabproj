const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for user data
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nickname: String
});



const userSchemaX = new mongoose.Schema({
  roleName: String,
  nftAmount: Number,
  traits: [{
    traitName: String,
    traitMatches: [String]
  }],
  collectionInfo: {
    tokenUrl: String,
    tokenId: String,
    tokenName: String,
    tokenContract: String,
    optionalInfo: String,
    chainName: String
  }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Middleware to parse incoming requests
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000' }));

// Define a route to handle user data submission
app.post('/api/user', async (req, res) => {
  try {
    
    console.log("GOT  post...");
    const { firstName, lastName, nickname } = req.body;
    const newUser = new User({ firstName, lastName, nickname });
    await newUser.save();
    res.json({ success: true, message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});