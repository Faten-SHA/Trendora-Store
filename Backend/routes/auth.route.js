import express from "express";
import {
  registerUser,
  loginUser,
  logOut,
} from "../controller/auth.controller.js"; // Importing the controller functions

const router = express.Router(); // Creating a new router instance

//REGISTER USER ROUTER
router.post("/register", registerUser); // Route for user registration, using the registerUser controller

//LOGIN USER ROUTER
router.post("/login", loginUser); // Route for user login, using the loginUser controller

//LOGOUT USER ROUTER
router.post("/logout", logOut); // Route for user logout, using the logOut controller)

export default router;
