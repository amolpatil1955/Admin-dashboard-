import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./src/routers/authRoute.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.use("/api/v1/auth", authRoutes);

// 1️⃣ CREATE HTTP SERVER
const server = http.createServer(app);

// 2️⃣ ATTACH SOCKET.IO TO SERVER
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });
});

// Start server
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
