const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT } = require("./config")
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const shopRoutes = require("./node-routes/api/shops");
const ordersRoutes = require("./node-routes/api/orders");
require("dotenv").config();



app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

const db = process.env.MONGO_URL;

app.use("/api/shops", shopRoutes) 
app.use("/api/orders", ordersRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/dist/'))
    app.get("*", (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    })
}

mongoose
    .connect(db)
    .then((res) => console.log("connection to DB"))
    .catch((error) => console.log(error));

app.listen(PORT, () => {
    console.log(`app has been started at port ${PORT}`);
})

