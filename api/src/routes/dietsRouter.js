require('dotenv').config();
const express = require("express");
const router = express.Router();
const { getAllDiets } = require("../controllers/dietsController")

router.get("/", async (req, res) => {
    try {
        const infoApi = await getAllDiets();
        res.status(200).send(infoApi);
    } catch (error) {
        res.status(404).send(`Error: ${error}`)
    }
});
    
module.exports = router;