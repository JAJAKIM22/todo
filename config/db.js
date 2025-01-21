import mongoose from "mongoose";
import dotenv from "dotenv";
import { Logger } from "../constants/logger.js";
dotenv.config();

dotenv.config();

const mongoUri = process.env.MONGO_URI;
const logger = Logger();

const connectToDB = async () => {
  logger.info("Trying to connect to the database");
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    logger.error({ err: err }, "Error connecting to MongoDB");
  }
};

export { connectToDB };
