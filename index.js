const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const quizzes = require("./db/quizzes")
const quizRouter = require("./router/quiz.router")
const authRouter = require("./router/auth.router")
const userdata = require("./db/users")
const jwt =  require("jsonwebtoken")
const dotenv = require("dotenv");
const routeNotFound = require("./middleware/routeNotFound")
const categoriesRouter = require("./router/categories.router")

const connectDB = require("./config/dbconfig");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB(); 

const PORT = 8080;
    
app.get("/",(req,res)=>{
      res.send("helo geeks")
})
 
app.use("/categories",categoriesRouter);
app.use("/quiz",quizRouter)
app.use("/api/auth",authRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || PORT,() =>{
      console.log("server started");
})



