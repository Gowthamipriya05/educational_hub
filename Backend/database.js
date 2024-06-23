const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'priya@123',
  database: 'EDUCATIONAL_HUB'
});

client.on('connect', () => {
  console.log('Database connected');
});

client.on('end', () => {
  console.log('Connection ended');
});

module.exports = client;
