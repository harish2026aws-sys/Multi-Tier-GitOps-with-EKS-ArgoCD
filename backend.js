const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecommerce");

const Product = mongoose.model("Product", {
    name: String,
    price: Number,
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));

