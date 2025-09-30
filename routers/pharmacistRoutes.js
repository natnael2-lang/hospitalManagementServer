const express = require('express');
const router = express.Router();

const {getOrders,sellMedicine}=require("../controllers/pharmasist/controllers")


router.route("/orders").get(getOrders);
router.route("/sellMedicine").post(sellMedicine);






module.exports=router;