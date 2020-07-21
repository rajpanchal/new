const express=require("express");
const app=express();
const userRouter = require('./api/user/user.router.js');
const dataRouter = require('./api/data/data.router.js');
require('dotenv').config()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());

app.use("/app/user",userRouter);
app.use("/app/sites",dataRouter)

app.listen(3010,()=>{
	console.log("Server started");
})