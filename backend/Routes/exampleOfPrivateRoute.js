const router = require("express").Router()
const verify =require("../middleware/verifyToken")
const linkModel = require("../Models/Link")
const { linkValidation} = require("../Models/Validation")


router.post('/link', verify,async (req, res) => {
     // Link validation
     const { error } = linkValidation(req.body)
     
     if (error)
     {
          res.status(400).send(error.details[0].message)}
     else {
     //creating a new Link
          
          const Link1 = req.body.Link1
          const Link2 = req.body.Link2
          const Link3 = req.body.Link3
          const newLink = new linkModel({Link1,Link2,Link3,});
          try {const hola= await newLink.save()
               res.send("Link added done")}
          catch (err) { res.status(400).send(err) }
          
     }     
})


module.exports = router;