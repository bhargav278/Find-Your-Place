const express = require("express")
const home = express.Router();
const listingController =require("../controllers/listings.js");
const wrapAsync=require("../utils/wrapAsync.js");


home.route("/")
.get(wrapAsync(listingController.index))

module.exports = home