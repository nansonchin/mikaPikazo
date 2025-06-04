require('dotenv').config()

const pool = require('../db.cjs')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

exports.register = async (req,res)=>{
    const {username,email,password,password2}=req.body;
    if(!username || !email || !password){
        return res.status(400).json({message:'Username,email and password are requried'})
    }

    if(password !== password2){
        return res.status(400).json({message:'Passwords Does not match'})
    }

    try{
        const userCheck = await pool.query('SELECT id FROM users WHERE email = $1',[email]);
        if(userCheck.rows.length > 0){
            return res.status(400).json({message:'Email is already in used'})
        }
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds)

        const insertResult= await pool.query(
            'INSERT into users (username,email,password) values ($1,$2,$3) RETURNING id,username,email',
            [username,email,hashedPassword]
        )

        const newUser = insertResult.rows[0]
        const payload = {userId:newUser.id}
        const token = jwt.sign(payload,JWT_SECRET,{expiresIn:'2h'});

        return res.status(201).json({
            message:'User register successfully',
            token,
            user:{
                id:newUser.id,
                username:newUser.username,
                email:newUser.email,
            }
        })
    }catch(err){
        console.error('Register Error', err)
        return res.status(500).json({message:'Internal Server Error Register Error'})
    }
}

exports.login = async(req,res) => { 
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:'Username and Password are required'})
    }
    try{
        const userResult = await pool.query('SELECT * from users WHERE username = $1',[username])
        if(userResult.rows.length===0){
            return res.status(400).json({message:'Invalid User Found'})
        }
        const user = userResult.rows[0]

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:'Invalid Password'})
        }

        const payload={userId:user.id};
        const token=jwt.sign(payload,JWT_SECRET,{expiresIn:'2h'})

        return res.json({
            message:'Logged In Successfully',
            token,
            user:{
                id:user.id,
                username:user.username,
                email:user.email,
            },
        })
    }catch(err){
        console.error('Login Error', err)
        return res.status(500).json({message:'Internal Server Error Login Error'})
    }
}

exports.getProfile=async(req,res)=>{
    try{
        const userId=req.userId;
        const userResult = await pool.query(
            `SELECT id,username,email, created_at FROM users WHERE id=$1`,
            [userId]
        )
        if(userResult.rows.length===0){
            return res.status(404).json({message:'User not found'})
        }
         return res.json({ user: userResult.rows[0] });
    }catch(err){
        console.error('Get Profile Error',err)
        return res.status(500).json({message:'Interal Server Error Get Profile Error'})
    }
}