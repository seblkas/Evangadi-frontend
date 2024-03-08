const express = require('express');
const router = express.Router()


router.get("/all-question",(req,res)=>{
  res.send("all questions")

})
module.exports =router



