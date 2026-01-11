import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routers/authRoute.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: "https://admin-dashboard-frontend-m1ft.onrender.com",
  credentials: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
//amol can updated on gihub
app.use("/api/v1/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
