import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

// CREATE ORDER

const createOrder = asyncHandler(async (req, res) => {
  const newOrder = Order(req.body);
  const savedOrder = await newOrder.save();
  if (!savedOrder) {
    res.status(400);
    throw new Error("Order not created");
  } else {
    res.status(201).json(savedOrder);
  }
});

// UPDATE ORDER
const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true } // Return the updated document
  );

  if (!updatedOrder) {
    res.status(400);
    throw new Error("Order not updated");
  } else {
    res.status(200).json(updatedOrder);
  }
});

// DELETE ORDER

const deleteOrder = asyncHandler(async (req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
        res.status(400);
        throw new Error("Order not deleted");
    } else {
        res.status(200).json("Order deleted successfully");
    }
});

// GET USER ORDER

const getUserOrder = asyncHandler(async (req, res) => {
    const userOrders = await Order.find({ userId: req.params.id }).reverse();
    if (!userOrders) {
        res.status(400);
        throw new Error("User orders not found");
    } else {
        res.status(200).json(userOrders);
    }
});

// GET ALL ORDERS
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();
    if (!orders) {
        res.status(400);
        throw new Error("Orders not found");
    } else {
        res.status(200).json(orders);
    }
});

export { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders };