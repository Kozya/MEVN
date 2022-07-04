const { Router } = require('express');
const Shop = require("../../models/Shop");
const router = Router();

router.get("/", async (req, res) => {
    try {
        const shops = await Shop.find()
        if (!shops) throw new Error("No shops")
        res.status(200).json(shops)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports = router