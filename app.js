const express = require('express')
const cors = require('cors')
const chat = require('./data')
const mongoose = require('mongoose') 
const app = express()
const userRoutes = require('./Routes/userRoutes')
const User = require('./models/userModel')

app.use(cors())
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://balavignesh5678:bala5678@cluster0.nw8a8.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

  app.use('',userRoutes);
  // app.post('/api/user',(req,res)=>{
  //   const{name,email,pass,pic}=req.body;
  //   User.findOne({email})
  //   .then((user)=>{
  //     if(user){
  //       console.log("user Already exists")
  //       res.status(400)
  //     }
  //     else{
  //       User.create({name,email,pass,pic})
  //       .then((result)=>{
  //         res.json("User Created")
  //       })
  //       .catch((e)=>{
  //         res.json(e)
  //       })
  //     }
  //   })
  //   .catch((e=>{
  //     console.log(e)
  //   }))

  // })




app.listen(5000,()=>{
    console.log("Server run on 5000");
})