const { Router } = require('express');
const Order = require("../../models/Order");

const router = Router();

router.post("/confirm", async (req, res) => {
    const newOrder = new Order(req.body) 
    try {
        const order = await newOrder.save()
        if (!order) throw new Error("No order")
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})
module.exports = router