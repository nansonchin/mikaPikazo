const express = require('express')
const router= express.Router()
const pool = require('../db.cjs')

router.get('/',async(req,res)=>{
    try{
        const{rows}= await pool.query('SELECT * FROM exhibition')
        
        const exhibitionList = rows.map((row)=>({
        id:           row.id,
        title:        row.title,
        description:  row.description,
        smile:        row.smile,
        love:         row.love,
        view:         row.view,
        date:         row.date,
        image_details: row.image_details,
        category:     row.category,
        }))
        res.json(exhibitionList)

    }catch(error){
        console.error('Error: Error getting exhibiton art data', error)
        res.status(500).json({error:'Error Getting Exhibition Art'})
    }
})

router.get('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const { rows } = await pool.query(
            `
            SELECT *
            FROM exhibition
            WHERE id = $1
            `,
            [id]
        );
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Exhibition detail not found' });
        }
        res.json(rows[0]);
    }catch (err) {
            console.error('Error getting exhibition detail:', err);
            res.status(500).json({
            error: 'Internal Server Error while fetching exhibition detail'
        });
    }
})

module.exports = router;