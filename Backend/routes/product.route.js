import {
  ratingProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controller/product.controller.js";
import express from "express"; // Importing express

const router = express.Router();

// Rating  Product Route
router.put("/rating/:productId", ratingProduct);

// GET ALL PRODUCTS ROUTE
router.get("/", getAllProducts);

// GET ONE PRODUCT ROUTE
router.get("/find/:id", getProduct);

// CREATE PRODUCT ROUTE
router.post("/", createProduct);

// UPDATE PRODUCT ROUTE
router.put("/:id", updateProduct);

// DELETE PRODUCT ROUTE
router.delete("/:id", deleteProduct);

export default router;
