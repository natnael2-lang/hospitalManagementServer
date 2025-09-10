const express = require('express');
const router = express.Router();
const {receptionOnLoad} = require("../controllers/receptions/controllers.js");
const middlewares=require("../middlewares/authMiddleware")

router.route('/')
    .get(receptionOnLoad);

module.exports = router; 