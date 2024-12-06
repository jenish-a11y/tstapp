// config.js

const path = require('path');

// Configuration object
const config = {
  // Define the environment for the app (development, production, etc.)
  environment: process.env.NODE_ENV || 'development',

  // Define the port the app will run on
  port: process.env.PORT || 3000,

  // Define the paths to important directories
  paths: {
    public: path.join(__dirname, 'public'),
    views: path.join(__dirname, 'views'),
    logs: path.join(__dirname, 'logs'),
  },

  // Database configuration (if applicable)
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database_name',
  },

  // API configuration
  api: {
    baseUrl: process.env.API_BASE_URL || 'https://api.example.com',
    timeout: process.env.API_TIMEOUT || 5000,
  },

  // Any other custom configuration you may need
  customConfig: {
    appName: 'Advanced Node.js App',
    enableLogging: true,
  },
};

module.exports = config;

