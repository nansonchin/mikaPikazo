require ('dotenv').config()
const express = require('express')
const cors = require('cors');
const {Pool} = require('pg');

const app = express();
app.use(cors())
app.use(express.json());

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized:false,
    }

})

app.get('/api/news',async(req,res)=>{
    try{
        const {rows}= await pool.query(
            `SELECT id,title,date,month,description,facebook,instagram,twitterx,image_url
            FROM news
            ORDER BY id ASC
            `
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
        res.json(news);
    }catch(error){
        console.log('New error fetching', error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.get('/api/news/:id',async (req,res)=>{
    const {id} = req.params;
    try{
        const {rows} = await pool.query(
            `SELECT *
            FROM news
            WHERE id = $1`,
            [id]
        );
        if(rows.length===0){
            return res.state(404).json({error:'News Detail not found'})
        }
        res.json(rows[0]);
    }catch(err){
        console.log('Error On getting news details id',err)
        res.status(500).json({err:'Internal Server Error Error On getting news details id'})
    }
})

app.get('/api/shop/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const {rows}= await pool.query(
            `SELECT *
            FROM shop
            WHERE id = $1`,
            [id]
        );
        if(rows.length===0){
            return res.state(404).json({error:'Shop Detail not found'})
        }
        res.json(rows[0])
    }catch(err){
        console.log('Error On getting shop details id',err)
        res.status(500).json({err:'Internal Server Error Error On getting news details id'})
    }
})

app.get(`/api/exhibition/:id`,async(req,res)=>{
    const {id} = req.params;
    try{
        const {rows}= await pool.query(
            `SELECT * 
            FROM exhibition
            WHERE id = $1`,[id]
        );
        if(rows.length===0){
            return res.state(404).json({error:'Exhibition Art Detail not found'})
        }
        res.json(rows[0])
    }catch(err){
        console.log('Error On getting shop details id',err)
        res.status(500).json({err:'Internal Server Error Error On getting news details id'})
    }
})

app.get('/api/about',async(req,res)=>{
    try{
        const {rows}=await pool.query(
            `SELECT * FROM about`
        )
        const about = rows.map((row)=>({
            id:row.id,
            about_description:row.about_description,
            name_en:row.name_en,
            name_jp:row.name_jp,
        }))
        return res.json(about)
    }catch(err){
        console.log('About error fetching', err)
        res.status(500).json({err:'Internal Server Error'})
    }
})

app.get('/api/shop',async(req,res)=>{
    try{
        const {rows} = await pool.query(
            `SELECT * FROM shop`
        )
        const shopList = rows.map((row)=>({
            id:row.id,
            image_url:row.image_url,
            category:row.category,
            title:row.title,
            price:row.price,
            description:row.decription,
            content:row.content,
            information:row.information
        }))
        return res.json(shopList)
    }catch(err){
        console.log('Shop error fetching', err)
        res.status(500).json({err:'Internal Server Error'})
    }
})

app.get('/api/exhibition',async(req,res)=>{
    try{
        const {rows} = await pool.query(
            `SELECT * FROM exhibition`
        )
        const exhibitionList=rows.map((row)=>({
            id:row.id,
            title:row.title,
            description:row.description,
            smile:row.smile,
            love:row.love,
            view:row.view,
            date:row.date,
            image_details:row.image_details,
            category:row.category,
        }))
        return res.json(exhibitionList)
    }catch(err){
        console.log('Exhibition error fetching', err)
        res.status(500).json({err:'Internal Server Error'})
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});