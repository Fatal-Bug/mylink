const jwt = require('jsonwebtoken')
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.TOKEN_ENCRYPT);

async function auth (req, res, next)
{
     
     const entoken = req.header('auth-token')
     
     const token = await cryptr.decrypt(entoken);
     if (!token)
     {
          res.status(401).send("denied")
     }
     else
     {
          try {
               const verified = jwt.verify(token, process.env.TOKEN_SECRET)
               req.user = verified
               next()
          }
          catch (err){
               res.status(401).send("access denied")
          }
     }
     
}
module.exports=auth