import express from 'express';
import { Resgister, Login } from "../controller/authcontroller.js";
import Alluser from '../controller/Alluser.js'

const router = express.Router();

router.post('/register',Resgister);
router.post('/login',Login);
router.get('/user',Alluser)



export default router;
