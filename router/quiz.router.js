const express = require("express");
const quizRouter = express.Router();
const quizzes = require("../db/quizzes");
const authVerify = require("../middleware/verifyuser")

quizRouter.route("/")
        .get(authVerify,(req,res)=>{
             res.json(quizzes)
        })
module.exports = quizRouter;
