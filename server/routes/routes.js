const express = require("express");
const router = express.Router();
const Users = require("../models/model.js");

router.post("/signUp", (req, res) => {
const {name, email, password} = req.body;  

  Users.findOne({email: email}, (error, user) => {
    if (user) {
      res.send({message: "This E-Mail Id already exists!"});
    } else {
      Users.create(req.body)
        .then((data) => {
          res.send({message: "Successfully Registered, Sign In to visit your profile"});
        })
        .catch((err) => {
          console.log("err");
          res.send({ message: "Error occurred"});
        });
    }
  });
})
.post("/signIn", (req, res) => {
    const {email, password} = req.body;
    Users.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({
                    message: "Login Successful",
                    user: user
                })
            }else{
                res.send({message: "Enter correct password"})
            }
        }else{
            res.send({message: "Email Id not registered"})
        }
    });
  })

module.exports = router;
