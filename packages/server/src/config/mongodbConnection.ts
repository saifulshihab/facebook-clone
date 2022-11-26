/* eslint-disable no-console */
import mongoose from 'mongoose';

async function connectMongoDB() {
  try {
    const connection = await mongoose.connect(
      process.env.DB_URL || 'mongodb://localhost:27017/facebook-clone'
    );
    console.log(`\nMongoDB connected to ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
  }
}

export { connectMongoDB };
