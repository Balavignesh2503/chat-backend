const User = require("../models/userModel");

const registerUser = () => {
  // const {name,email,password,pic}= req.body;
  // if(!name || !email || !password){
  //     res.status(400);
  //     throw new Error("please enter all the fields")
  // }
  const { name, email, pass, pic } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        console.log("user Already exists");
        res.status(400);
      } else {
        User.create({ name, email, pass, pic })
          .then((result) => {
            res.json("User Created");
          })
          .catch((e) => {
            res.json(e);
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = {registerUser};
