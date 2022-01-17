require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || '3002',
  dialect: 'mysql',
};
