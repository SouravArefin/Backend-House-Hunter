
const express = require('express');
require('./db')
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId
const port = process.env.PORT || 5000


//middleware

app.use(bodyParser.json())
//app.use(cors())
const corsConfig = {
    origin: true,
    credentials: true,
  }
  app.use(cors(corsConfig))
  app.options('*', cors(corsConfig))


//router
 const userRouter = require("./Routes/User")
 const ownerRouter = require("./Routes/Owner")
 const rentRouter = require("./Routes/Rent")
// const movieRouter = require("./routes/movie")



 app.use("/api/user",userRouter);
 app.use("/api/owner",ownerRouter);
 app.use("/api/rent",rentRouter);
// app.use("/api/actor",actorRouter );
// app.use("/api/movie",movieRouter );






app.get("/", (req, res) => { 
  res.send('House Hunter App')
})
//check 
app.listen(port, () => {
    console.log(`server is running ${port}`)
})