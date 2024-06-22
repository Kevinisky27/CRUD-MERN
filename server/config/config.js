import dotenv from 'dotenv';
dotenv.config();

const config = {
  mongoURI: process.env.MONGODB_URI,
};

export default config;