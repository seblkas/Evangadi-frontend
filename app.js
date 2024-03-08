require ("dotenv").config()
const express = require('express');
const app = express();
const port = 5500

// dbconnection
const dbConnection =require("./db/dbConfig")

// user routes mideleware file
const userRoutes =require("./routes/userRoute")
// questions routes middleware
const questionsRoutes = require("./routes/questionRoute");
// authentication middleware
const authMiddleware = require('./middleware/authMiddleware');

// json middleware to extractt json data
app.use(express.json())

// user routes middleware
app.use("/api/users",userRoutes)
// questions routes middleware ??
app.use("/api/questions", authMiddleware,questionsRoutes)

// answers routes middleware ??



async function start(){
  try {
    const result = await dbConnection.execute("select 'test' ")
    await app.listen(port)
    console.log("database connection established")
    console.log(`listening on ${port}`);

  } catch (error) {
    console.log(error.message)
  }
  }

start()


