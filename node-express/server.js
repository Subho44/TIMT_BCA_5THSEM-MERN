const express = require('express');
const app = express();//express js call 
const port = 5600;

app.use(express.json());
//dummy products
const products = [
    { id: 1, name: "Laptop", price: 67000 },
    { id: 2, name: "Watch", price: 6700 },
    { id: 3, name: "Iphone", price: 670000 },

];
//data insert
app.post("/products/add", (req, res) => {
    const {name,price} = req.body;
    //create new product
    const newproduct = {
        id:products.length +1,
        name,
        price
    };
    products.push(newproduct);
    res.json({
        message:"product added successfully",
        data:newproduct,
    });
});
//basic routing
app.get("/", (req, res) => {
    res.send("home page");
});
//fetch all data
app.get("/products", (req, res) => {
    res.json({
        message:"Product List",
        total:products.length,
        data:products,

    });
});
//data search product name wise
app.get("/products/search", (req, res) => {
    const {name} = req.query;//search query based
    //filter
    const result = products.filter(x=>
        x.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json({
        message:"product list search",
        total:result.length,
        data:result,
    });
});
//singel based product search 
app.get("/products/:id", (req, res) => {
    const produtid = parseInt(req.params.id);
    const product = products.find(x=>x.id ===produtid);
    res.json({
        message:"singel product information",
        data:product,
    });

});

//how to run port
app.listen(port, () => {
    console.log("server is running port 5600");
})



