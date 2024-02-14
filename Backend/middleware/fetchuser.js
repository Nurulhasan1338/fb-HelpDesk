var jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// here we can modify request
const fetchuser= (req,res,next)=>{
    // Get the user id from the jwt token add id to the req object
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error:"access wwer denied"});
    }

    try{const data = jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    console.log( req.user);
    next();
} catch(error){
        res.status(401).send({error:"access sds denied"});
    }
}

module.exports = fetchuser;