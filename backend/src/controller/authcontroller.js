import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Controller
export const Resgister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exituser = await User.findOne({ email });
    if (exituser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hanshpassword = await bcrypt.hash(password, 10);
    const NewUser = new User({
      name,
      email,
      password: hanshpassword,
    });
    NewUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while Register" });
    console.log("Error while Registerd User", error);
  }
};

// Login Controller
export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const ispasswordcorrect = await bcrypt.compare(password, user.password);
    if (!ispasswordcorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
  { id: user._id, Role: user.role },
  process.env.JWT_SECRET,   // ⭐ Capital letters
  { expiresIn: "1d" }
);

      return res.status(200).json({
      status: "success",
      role: user.role,
      message: "Login Successful",
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default { Resgister, Login };
