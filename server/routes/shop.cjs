const express = require('express');
const router=express.Router()
const pool= require('../db.cjs')

router.get('/',async (req,res) => {
    try{
        const {rows}= await pool.query('SELECT * from shop');
        const shopList=rows.map((row)=>({
            id:          row.id,
            image_url:   row.image_url,
            category:    row.category,
            title:       row.title,
            price:       row.price,
            description: row.description,  
            content:     row.content,
            information: row.information,
        }))
        res.json(shopList)
    }catch(error){
        console.error('Shop error fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const {rows}= await pool.query('SELECT * FROM shop where id= $1',[id])
        if(rows.length === 0){
            return res.status(404).json({ error: 'Shop detail not found' })
        }
        res.json(rows[0])
    }catch(error){
        console.error('Error getting shop detail:', error);
        res.status(500).json({
            error: 'Internal Server Error while fetching shop detail'
        });
    }
})

module.exports = router;