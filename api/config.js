// config.js
module.exports = {
  PORT: process.env.PORT || 3000,
  POSTGRES_URI: process.env.POSTGRES_URI || 'postgresql://postgres:postgres@127.0.0.1:5432/bolao',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret'
};
