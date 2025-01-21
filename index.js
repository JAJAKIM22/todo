import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import swaggerSetup from "./documentation/swagger.js";
import http from "http";
import { connectToDB } from "./config/db.js";
import { Logger } from "./constants/logger.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const logger = Logger();

const app = express();
const appServer = http.createServer(app);
swaggerSetup(app);
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
  logger.info(
    {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
    },
    "Incoming request"
  );
  next();
});



// Routes
app.use("/todo", todoRoutes)

appServer.listen(port, async () => {
  await connectToDB();
  logger.info("Successfully connected to MongoDB");
  logger.info(`Server is running on port ${port}`);
});

const handleExit = (signal) => {
  logger.info(`Received ${signal}. Shutting down application.`);
  process.exit(0);
};

process.on("SIGINT", handleExit);
process.on("SIGTERM", handleExit);
