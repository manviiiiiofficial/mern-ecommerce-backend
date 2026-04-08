const express = require("express");
const router = express.Router();

// import USER controller
const {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../apis/controllers/userController");

// Register user
router.post("/register", registerUser);

//login user
router.post("./login",loginUser);

// Get all users
router.get("/users", getAllUsers);

// Get single user
router.get("/user/:id", getSingleUser);

// Update user
router.put("/user/:id", updateUser);

// Delete user
router.delete("/user/:id", deleteUser);



//import REVIEW controller

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview
} = require("../apis/controllers/reviewController");

router.post("/review", createReview);
router.get("/reviews", getAllReviews);
router.get("/review/:id", getSingleReview);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);



//import PRODUCT controller
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require("../apis/controllers/productController");

router.post("/product", createProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getSingleProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);




//import CATEGORY controller

const {
  createCategory,
  getCategories
} = require("../apis/controllers/categoryController");

router.post("/category", createCategory);
router.get("/categories", getCategories);

//import BRAND controller

const {
  createBrand,
  getBrands
} = require("../apis/controllers/brandController");

router.post("/brand", createBrand);
router.get("/brands", getBrands);

//import ORDER controller

const {
  createOrder,
  getOrders
} = require("../apis/controllers/orderController");

router.post("/order", createOrder);
router.get("/orders", getOrders);

//import ENQUIRY controller

const {
  createEnquiry,
  getEnquiries
} = require("../apis/controllers/enquiryController");

router.post("/enquiry", createEnquiry);
router.get("/enquiries", getEnquiries);

//import CUSTOMER controller
const {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
} = require("../apis/controllers/customerController");

router.post("/customer", createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customer/:id", getSingleCustomer);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);

//import COUPON controller

const {
  createCoupon,
  getAllCoupons,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon
} = require("../apis/controllers/couponController");

router.post("/coupon", createCoupon);
router.get("/coupons", getAllCoupons);
router.get("/coupon/:id", getSingleCoupon);
router.put("/coupon/:id", updateCoupon);
router.delete("/coupon/:id", deleteCoupon);

module.exports = router;