import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routers/authRoute.js";
// import userRoutes from "./src/routers/user.js";


// Initialize Express app
const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/auth", userRoutes);




// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
