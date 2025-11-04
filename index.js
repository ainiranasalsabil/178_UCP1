
const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/Kandang', async (req, res) => {
  try {
    const Kandang = await db.Kandang.create(req.body);
    res.send(Kandang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

