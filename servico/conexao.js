const mysql = require('mysql2/promise');
require('dotenv').config();

const host = process.env.DATABASE_URL;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_USER_PASSWORD;
const database = process.env.DATABASE;

const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
});

module.exports = pool;
