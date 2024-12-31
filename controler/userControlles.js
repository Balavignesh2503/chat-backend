const User = require("../models/userModel");

const registerUser = (req,res) => {
  // const {name,email,password,pic}= req.body;
  // if(!name || !email || !password){
  //     res.status(400);
  //     throw new Error("please enter all the fields")
  // }
  const { name, email, pass } = req.body;
  console.log(name,email,pass);
  User.findOne({ email })
    .then((user) => {
      if (user) {
        console.log("user Already exists");
        res.status(400);
      } else {
        // console.log("no user found")
        // const user = new User({name,email,pass});
        // if(User){
        //   console.log("user created")

        // }
        // else{
        //   console.log("user not created")
        // }
        User.create({ name, email, pass })
          .then((result) => {
            res.json("User Created",result);
            console.log("user created",result);
          })
          .catch((e) => {
            res.json(e);
            console.log(e)
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = {registerUser};
