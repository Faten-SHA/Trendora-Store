import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

// CREATE PRODUCT
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product(req.body);
  const product = newProduct.save();

  if (product) {
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } else {
    res.status(400);
    throw new Error("Product not created");
  }
});

// UPDATE PRODUCT

const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true } // Return the updated document}
  );
  if (!updatedProduct) {
    res.status(400);
    throw new Error("Product not updated");
  } else {
    res.status(200).json(updatedProduct);
  }
});

// DELETE PRODUCT

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not deleted");
  } else {
    res.status(200).json("Product deleted successfully");
  }
});

// GET PRODUCT BY ID
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json(product);
  }
});

// GET ALL PRODUCTS
const getAllProducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qSearch = req.query.search;
  let products;
  if (qNew) {
    products = await Product.find().sort({ createdAt: -1 });
  } else if (qCategory) {
    products = await Product.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else if (qSearch) {
    products = await Product.find({
      $text: {
        $search: qSearch,
        $caseSensitive: false,
        $dicriticSensitive: false,
      },
    });
  } else {
    products = await Product.find().sort({ createdAt: -1 });
  }
});

// RATING PRODUCT

const ratingProduct = asyncHandler(async (req, res) => {
    const {star,name,comment,postedBy} = req.body;

    if(star && name && comment && postedBy){
       const postedBy = await Product.findByIdAndUpdate(req.params.id, {
            $push: {
                ratings: {star, name, comment, postedBy}},}, {new:true});

                res.status(201).json("Rating added successfully");

        } else {
            res.status(400);
            throw new Error("Product not rated");
        }


    
});

export {ratingProduct, createProduct, updateProduct, deleteProduct, getProduct, getAllProducts};
