const express = require('express');
const dotenv = require('dotenv');
const newsRoutes = require('./routes/newsRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/news', newsRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});