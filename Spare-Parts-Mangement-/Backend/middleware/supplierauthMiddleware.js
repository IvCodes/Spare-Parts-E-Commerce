const asyncHandler = require("express-async-handler");
const Supplier = require("../models/supplierModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401);
            throw new Error("Not authorized, please login");
        }


        //Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        //Get user id from token
        const supplier = await Supplier.findById(verified.id).select("-password"); //this will provide all the info of sup in the database

        if (!supplier) {
            res.status(401);
            throw new Error("Supplier not found");
        }

        req.supplier = supplier;
        next();

    } catch (error) {
        res.status(401);
        throw new Error("Not authorized, please login");
    }
}); //to protect certain routes

module.exports = protect;