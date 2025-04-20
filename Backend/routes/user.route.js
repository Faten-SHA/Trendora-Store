import express from 'express';
import { updateUser, deleteUser, getUser, getAllUsers } from '../controller/user.controller.js'; 


const router = express.Router(); // Creating a new router instance


//GET ALL USERS ROUTE
router.get("/", getAllUsers); 

//GET ONE USER ROUTE
router.get("/find/:userId", getUser);

//UPDATE USER ROUTE
router.put("/:id", updateUser);

//DELETE USER ROUTE
router.delete("/:id", deleteUser);

export default router; 