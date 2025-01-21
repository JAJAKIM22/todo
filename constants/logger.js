import path from "path";
import bunyan from "bunyan";
import bformat from "bunyan-format";
import dotenv from "dotenv";
import { createStream } from "rotating-file-stream";
dotenv.config();

const formatOut = bformat({
  color: "true",
});

const Logger = () => {
  const appDirectory = process.cwd();

  let logger = null;

  // Helper function to create rotating streams
  function createRotatingStream(filename) {
    const fullPath = path.join(appDirectory, "logs", filename);
    return createStream(fullPath, {
      interval: "1d", // Rotate daily
      size: "10M", // Rotate after 10MB
      compress: "gzip", // Compress old files
    });
  }

  const logConfig = {
    src: true,
    name: process.env.APP_NAME || "DEFAULT",
    serializers: {
      req: (req) => ({
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        params: req.params,
        query: req.query,
      }),
    },
    streams: [
      {
        level: "debug",
        stream: formatOut,
      },
      {
        level: "info",
        stream: createRotatingStream("app-info.log"),
      },
      {
        level: "error",
        stream: createRotatingStream("app-error.log"),
      },
      {
        level: "warn",
        stream: createRotatingStream("app-warn.log"),
      },
    ],
  };

  if (logger) {
    return logger;
  }
  logger = bunyan.createLogger(logConfig, {
    level: process.env.LOG_LEVEL || "info",
  });
  return logger;
};

export { Logger };
