import express from "express";
import {
  createBanner,
  deleteBanner,
  getAllBanners,
  getRandomBanner,
} from "../controller/banner.controller.js"; // Importing the controller functions

const router = express.Router();

// CREATE BANNER ROUTE
router.post("/", createBanner);

// GET ALL BANNERS ROUTE
router.get("/", getAllBanners);

// DeLETE BANNER ROUTE
router.delete("/:id", deleteBanner);

// GET RANDOM BANNER ROUTE
router.get("/random", getRandomBanner);

export default router;
