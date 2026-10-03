const express = require('express');
const cors=require('cors');
require("dotenv").config();

const route = require("./routes/taskRoute");
const app=express();
app.use(cors());
// Allow the server to read JSON data from requests
app.use(express.json());

app.use("/api/tasks",route);

app.listen(process.env.PORT,()=>{
    console.log("Server is Running...");
})