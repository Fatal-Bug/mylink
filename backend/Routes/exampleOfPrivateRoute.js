const router = require("express").Router()
const verify =require("../middleware/verifyToken")
const linkModel = require("../Models/Link")
const { linkValidation} = require("../Models/Validation")
const jwt = require('jsonwebtoken')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.TOKEN_ENCRYPT);


router.post('/link', verify,async (req, res) => {
     // Link validation
     //const { error } = linkValidation(req.body)
     
     // if (error)
     // {
     //      res.status(400).send(error.details[0].message)}
     // else {
     // //creating a new Link
          
     //      const { _id, Link } = req.body;
          
     //      const newLink = new linkModel({
     //           _id,
     //           Link
     //      });

     //      try {const hola= await newLink.save()
     //           res.send("Link added done")}
     //      catch (err) { res.status(400).send(err) }
          
     // }     
     // for test
     
          const { Link } = req.body;

          const entoken = req.header('auth-token')
          
          const token = await cryptr.decrypt(entoken);

          const _id = jwt.verify(token, process.env.TOKEN_SECRET)._id
          
          const newLink = new linkModel({
               _id,
               Link
          });

          try {const hola= await newLink.save()
               res.send("Link added done")}
          catch (err) { res.status(400).send(err) }
})


module.exports = router;