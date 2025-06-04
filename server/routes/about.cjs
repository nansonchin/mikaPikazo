const express = require('express');
const router = express.Router();
const pool = require('../db.cjs');

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT *
      FROM about
    `);

    const about = rows.map(row => ({
      id:                row.id,
      about_description: row.about_description,
      name_en:           row.name_en,
      name_jp:           row.name_jp,
    }));

    res.json(about);
  } catch (err) {
    console.error('About error fetching:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;