// import express from "express";
// import { auth } from "../middleware/authmiddler.js";

// const router = express.Router();



// router.get("/profile", auth, async (req, res) => {
//   try {
//     const userData = await User.findById(req.user.id).select("-password");
//     res.json({ message: "User Profile", user: userData });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });



// export default router;
