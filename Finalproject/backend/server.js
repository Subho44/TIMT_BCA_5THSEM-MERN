const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const fundRoutes = require('./routes/fundRoutes');
const path = require('path');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();
app.get("/",(req,res)=>{
    res.send("api is working");
});
app.use('/api/funds',fundRoutes);
app.use('/uploads',express.static(path.join(__dirname,"uploads")));
const port = process.env.PORT || 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
})
