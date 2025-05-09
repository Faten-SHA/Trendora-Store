import express from 'express';
const router = express.Router();
import { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders } from '../controller/order.controller.js'; 
import protect from '../Middleware/auth.middleware.js';

//CREATE ORDER ROUTE
router.post("/", createOrder);

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//GET ALL ORDERS
router.get("/",protect, getAllOrders);

// DELETE ORDER
router.delete("/:id", deleteOrder);

//GET USER ORDER ROUTE
router.get("/find/:userId", getUserOrder);

export default router; 