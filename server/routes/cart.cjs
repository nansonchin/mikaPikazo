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
    try{
        const updateResult= await pool.query(
            `
            UPDATE cart_item
            SET quantity = quantity + 1
            WHERE user_id = $1
            AND product_id = $2
            AND is_remove = 0 
            RETURNING *
            `,
            [userId,productId]
        )
        if(updateResult.rowCount>0){
            return res.json({success:'true',updated:updateResult.rows[0]})
        }

        const insertResult = await pool.query(
            `
            INSERT INTO cart_item (user_id,product_id,quantity,is_remove)
            VALUES ($1,$2,$3,$4)
            RETURNING *
            `,[userId,productId,1,0]
        )
        return res.json({success:true,inserted:insertResult.rows[0]})
    }catch(err){
        console.error(`Add to cart error:`, err.stack || err);
        return res.status(500).json({message:'Internal Server Error'})
    }

})

router.get('/get',authMiddleware,async(req,res)=>{
    const userId=req.userId
    try{
        const getQuery = await pool.query(`SELECT SUM(quantity) AS total FROM cart_item WHERE user_id=$1 AND is_remove = $2` , [userId,0])
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
        WHERE user_id = $1
        AND is_remove = 0`,
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
        const {rows:existingRows}= await pool.query(
            `
                SELECT product_id,is_remove
                FROM cart_item
                WHERE id =$1
                AND user_id =$2
            `,[cartId,userId]
        )

        if(existingRows.length ===0){
            return res.status(404).json({message:'Cart item not found'})
        }
        const {product_id:productId,is_remove}= existingRows[0]

        if(is_remove ===1){
            const insertNew = await pool.query(
                `
                INSERT INTO cart_item (user_id,product_id, quantity, is_remove)
                VALUES ($1, $2,$3,0)
                RETURNING *
                `,
                [userId,productId,quantity]
            )
            return res.json({success:true,inserted:insertNew.rows[0]})
        }

    
        const result = await pool.query(`
            UPDATE cart_item
            SET quantity = $1
            WHERE id = $2 AND user_id = $3 AND is_remove=0
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
            AND c.is_remove = 0
            ORDER BY c.id ASC
            `,[userId]
        );
        return res.json(rows)
    }catch(err){
        console.error('Error fetching cart item',err);
        return res.status(500).json({message:'Internal Server Error'})
    }
})

module.exports= router;