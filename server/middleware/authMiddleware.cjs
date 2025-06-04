require('dotenv').config();

const jwt= require('jsonwebtoken')

const JWT_SECRET=  process.env.JWT_SECRET

module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:'No token provided'})
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        req.userId=decode.userId;
        next();
    }catch(err){
        return res.status(403).json({message:'Error Token'})
    }
}