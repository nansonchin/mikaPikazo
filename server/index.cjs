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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});