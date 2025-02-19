const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const NEWS_API_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.NEWS_API_KEY;


router.get('/sources', async (req, res, next) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/sources`, {
      params: { apiKey: API_KEY }
    });
    res.status(200).json(response.data);
  } catch (err) {
    next(err);
  }
});

router.get('/top-headlines', async (req, res, next) => {
  const { country, category, sources, q } = req.query;
  if (!country && !category && !sources && !q) {
    return res.status(400).json({ error: 'Debe proporcionar al menos un parámetro (country, category, sources o q)' });
  }
  try {
    const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
      params: { country, category, sources, q, apiKey: API_KEY }
    });
    res.status(200).json(response.data);
  } catch (err) {
    next(err);
  }
});

router.get('/everything', async (req, res, next) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Debe proporcionar un parámetro de búsqueda (q)' });
  }
  try {
    const response = await axios.get(`${NEWS_API_URL}/everything`, {
      params: { q, apiKey: API_KEY }
    });
    res.status(200).json(response.data);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

module.exports = router;
