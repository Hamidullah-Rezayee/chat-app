import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { app, server } from "./lib/socket.js";
import path from "path";
import { fileURLToPath } from "url";

app.set("trust proxy", 1);

const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Apply security middleware
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Serve static files from frontend dist folder
const frontendDistPath = path.join(__dirname, "./../../frontend/dist");
app.use(express.static(path.join(frontendDistPath)));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDistPath, "index.html"));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Socket configuration
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
