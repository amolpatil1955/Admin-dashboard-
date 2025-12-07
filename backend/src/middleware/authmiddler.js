// import express from "express";
// import { auth } from "../middleware/auth.js";
// import User from "../models/UserModel.js";

// const router = express.Router();

// router.get("/profile", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     res.json({
//       message: "Profile fetched successfully",
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

// export default router;
