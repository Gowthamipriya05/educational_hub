const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8081;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB connection string
const mongoUri = 'mongodb+srv://gowthamipriya2004:o61ZWzhvSWm58rDw@cluster0.1bjyoiz.mongodb.net/educational_hub?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB database
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error:', err));

// Define a Mongoose schema and model
const studentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  mobile: String,
  password: String,
  dob: Date,
  gender: String,
  address: String
});

const Student = mongoose.model('Student', studentSchema);

// Route for user registration
app.post('/registerpage', (req, res) => {
  console.log("Received data:", req.body); // Log received data
  const newStudent = new Student(req.body);

  newStudent.save()
    .then(data => {
      console.log('Data inserted successfully:', data); // Log inserted data
      res.json(data);
    })
    .catch(err => {
      console.error('MongoDB Error:', err.message); // Log the MongoDB error message
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Route for user login
app.post('/loginpage', (req, res) => {
  const { email, password } = req.body;

  Student.findOne({ email, password })
    .then(student => {
      if (student) {
        res.json('Success');
      } else {
        res.status(401).json('Invalid email or password');
      }
    })
    .catch(err => {
      console.error('MongoDB Error:', err.message); // Log the MongoDB error message
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
