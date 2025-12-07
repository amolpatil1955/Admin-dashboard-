import User from "../models/UserModel.js";



export default async function get_All_user (req,res) {
    const getalluser = await User.find();
    res.status(200).json(getalluser);

}
