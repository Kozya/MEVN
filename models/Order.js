const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    clientData:{
        type:Object,
        require:true
    },
    totalPrice:{
        type:Number,
        require:true
    },
    order: {
        type:Object,
        require:true
    },
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;