const express = require('express')
const router = express.Router()
const pool = require('../db.cjs')
const jwt= require('jsonwebtoken')
const JTW_SECRET = process.env.JTW_SECRET
const authMiddleware = require('../middleware/authMiddleware.cjs')

router.post('/add',authMiddleware,async(req,res)=>{
    const {productId} = req.body;
    const userId=req.userId;
    if(!productId){
        return res.status(400).json({message:'Product Id is required'})
    }
     try {
        // Make sure this matches your actual table name exactly:
        const result = await pool.query(`
        INSERT INTO cart_item (user_id, product_id, quantity)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id, product_id)
        DO UPDATE SET quantity = cart_item.quantity + 1
        `, [userId, productId, 1]);

        // result.rows might be empty for an INSERT/UPDATE, but at least no error was thrown
        return res.json({ success: true });
    } catch (err) {
        // Log the full error so you can see what went wrong:
        console.error('Add to cart error (SQL):', err.stack || err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

})

router.get('/get',authMiddleware,async(req,res)=>{
    const userId=req.userId
    try{
        const getQuery = await pool.query(`SELECT SUM(quantity) AS total FROM cart_item WHERE user_id=$1`, [userId])
        const count = getQuery.rows[0].total || 0;
        return res.json({count});
    }catch(error){
        console.error('Get Item Count Error ', error)
        return res.status(500).json({message:'Intrnal Server Error'})
    }
})
router.get('/count', authMiddleware, async (req, res) => {
    const userId = req.userId;

    try {
        const { rows } = await pool.query(
        `SELECT COALESCE(SUM(quantity), 0) AS total
        FROM cart_item
        WHERE user_id = $1`,
        [userId]
        );
        const count = rows[0].total || 0;
        return res.json({ count });
    } catch (err) {
        console.error('Get cart count error:', err.stack || err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/update',authMiddleware,async(req,res)=>{
    const {cartId,quantity}=req.body;
    const userId = req.userId;

    if(cartId == null || quantity==null){
        return res.status(400).json({message:'productId and quantity are required'})
    }
    if(typeof quantity!=='number' || quantity <1){
        return res.status(400).json({message:'quantity must be an integer'})
    }

    try{
        const result = await pool.query(`
            UPDATE cart_item
            SET quantity = $1
            WHERE id = $2 AND user_id = $3
            RETURNING *
            
            `,[quantity,cartId,userId])

            if(result.rowCount === 0){
                return res.status(404).json({message:'Cart Item now found'})
            }
    }catch(error){
        console.error('Update cart error:', err.stack || err);
        return res.status(500).json({message:'Internal Server Error'})
    }
})

router.post('/remove',authMiddleware,async(req,res)=>{
    const {productId}= req.body;
    const userId=req.userId;

    if(!productId){
        return res.status(400).json({message:'Product Id is required'})
    }
    try{
        const result =await pool.query(
            `
            DELETE FROM cart_item
            WHERE user_id=$1,AND product_id =$2
            RETURNING *
            `,
            [userId,productId]
        );
        if(result.rowCount===0){
            return res.status(404).json({message:'Cart Item not found unable to delete'})
        }
        return res.json({success:true})
    }catch(err){
        console.error(`Remove Cart Item Error: `, err.stack||err)
        return res.status(500).json({message:'Internal Server Error'})
    }
})
router.get('/',authMiddleware,async(req,res)=>{
    const userId=req.userId;
    try{
        const {rows}= await pool.query(
            `
            SELECT c.id as cart_id,
            c.product_id,
            c.quantity,
            s.title,
            s.price::integer,
            s.image_url[1] as thumbnail
            FROM cart_item as c
            JOIN shop s ON c.product_id=s.id
            WHERE c.user_id=$1
            `,[userId]
        );
        return res.json(rows)
    }catch(err){
        console.error('Error fetching cart item',err);
        return res.status(500).json({message:'Internal Server Error'})
    }
})

module.exports= router;