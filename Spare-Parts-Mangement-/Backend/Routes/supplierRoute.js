const express =require("express");
const { registerSupplier, loginSupplier, logout, getSupplier, loginStatus, updateSupplier, createSupplierForm, getSupplierForm, deleteSupplier, getSupplierForms } = require("../controllers/supplierController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();



router.post("/register", registerSupplier); 
router.post("/login", loginSupplier);
router.get("/logout", logout);
router.get("/getsupplier", protect, getSupplier);
router.get("/loggedin", loginStatus);
router.patch("/updatesupplier", protect, updateSupplier);
router.post("/supplierform", createSupplierForm);
router.get("/getsupplierforms", getSupplierForms);
router.get("/getsupplierform/:id", getSupplierForm);

router.delete("/:id",protect,deleteSupplier);

module.exports = router;