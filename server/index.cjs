require ('dotenv').config()
const express = require('express')
const cors = require('cors');
const pool = require('./db.cjs');
const authRoutes=require('./routes/auth.cjs')
const newsRoutes=require('./routes/news.cjs')
const shopRoutes=require('./routes/shop.cjs')
const exhibitionRoutes=require('./routes/exhibition.cjs')
const about=require('./routes/about.cjs')
const cartRoutes=require('./routes/cart.cjs')

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/news',newsRoutes)
app.use('/api/shop',shopRoutes)
app.use('/api/exhibition',exhibitionRoutes)
app.use('/api/about',about)
app.use('/api/cart',cartRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});