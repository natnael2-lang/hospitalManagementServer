const express = require('express');
const router = express.Router();
const {getLabRequests,postLabresult} = require("../controllers/labTechnician/controller");
const middlewares=require("../middlewares/authMiddleware")

router.route("/labRequests")
      .get(getLabRequests)
router.route("/labResult")
      .post(postLabresult)


module.exports=router