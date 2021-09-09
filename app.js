const express = require("express");
const mongoose=require("mongoose");
const app=express();


//connection to md
mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");


//route
app.use(require("./routers/index"))
app.use(require("./routers/todo"))
//server config

app.listen(3000,()=>console.log("Server started listening on port: 3000"))