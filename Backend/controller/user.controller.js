import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

// UPDATE USER

const updateUser = asyncHandler(async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true } // Return the updated document
  );

  if (!updatedUser) {
    res.status(400);
    throw new Error("User not updated");
  } else {
    res.status(201).json(updatedUser);
  }
});

// DELETE USER

const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    res.status(400);
    throw new Error("User not deleted");
  } else {
    res.status(201).json("User deleted successfully");
  }
});

// GET USER BY ID

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else {
    res.status(200).json(user);
  }
});

// GET ALL USERS

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(400);
    throw new Error("Users not found");
  } else {
    res.status(200).json(users);
  }
});

export { updateUser, deleteUser, getUser, getAllUsers };
