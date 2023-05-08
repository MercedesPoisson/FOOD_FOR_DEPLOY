require('dotenv').config();
const express = require("express");
const router = express.Router();
const getAllDiets = require("../controllers/getAllDiets")

router.get("/", getAllDiets)
    
module.exports = router;