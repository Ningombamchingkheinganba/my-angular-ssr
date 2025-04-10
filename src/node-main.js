const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/products/:id", (req, res) => {
    const product = {
        id: req.params.id,
        title: `product modified title ${req.params.id}`,
        description: `product description ${req.params.id}`
    }
     res.send(product);
})

app.listen("3000", ()=> {
    console.log("Server Listening to port 3000");
})