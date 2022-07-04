const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    products:{
        type:Object,
        require:true
    },
})

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;