const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const app = express();
const port = 8081;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// PostgreSQL database connection
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'priya@123',
  database: 'educational_hub' // Update with your database name
});

// Connect to PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Database connection error:', err.stack));

app.post('/registerpage', (req, res) => {
  console.log("Received data:", req.body); // Add this line for debugging
  const sql = "INSERT INTO students (fname, lname, email, mobile, password, dob, gender, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.mobile,
    req.body.password,
    req.body.dob,
    req.body.gender,
    req.body.address
  ];
  client.query(sql, values)
    .then(data => res.json(data))
    .catch(err => {
      console.error('PostgreSQL Error:', err.message); // Log the PostgreSQL error message
      return res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Route for user login
app.post('/loginpage', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM students WHERE email = $1 AND password = $2';

  client.query(query, [email, password])
    .then(results => {
      if (results.rows.length > 0) {
        res.json('Success');
      } else {
        res.status(401).json('Invalid email or password');
      }
    })
    .catch(err => {
      console.error('PostgreSQL Error:', err.message); // Log the PostgreSQL error message
      return res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
