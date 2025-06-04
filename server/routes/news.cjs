const express = require('express');
const router = express.Router();
const pool = require('../db.cjs')

router.get('/',async(req,res)=>{
    try{
        const {rows} = await pool.query(
            'SELECT * From news ORDER BY id ASC'
        )
    const news = rows.map((row)=>({
            id:row.id,
            title:row.title,
            date:row.date,
            month:row.month,
            facebook:row.facebook,
            instagram:row.instagram,
            twitterx:row.twitterx,
            image_url:row.image_url,
        }))
        res.json(news)
    }catch(error){
        console.log('New error fetching', error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const {rows}= await pool.query(
            'SELECT * FROM news WHERE id=$1',[id]
        )
        if(rows.length ===0){
            return res.status(404).json({error:'News Detail not found'})
        }
        res.json(rows[0])
    }catch(error){
        console.error('Error getting news detail:', error);
        res.status(500).json({
        error: 'Internal Server Error while fetching news detail'
        });
    }
})

module.exports=router