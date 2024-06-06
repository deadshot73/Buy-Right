import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  getProductsController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  getSingleProductBySlugController,
  productFiltersController,
  searchProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes

// create product
router.post(
  "/product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get all products
router.get("/product", getProductsController);

//get single product
router.get("/product/:pid", getSingleProductController);

//get single product by slug
router.get("/product/slug/:slug", getSingleProductBySlugController);
//get photo
router.get("/product/photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

// update product
router.put(
  "/product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product
router.post("/product/filter-products", productFiltersController);

//search product
router.get("/search/:keyword", searchProductController);

export default router;
