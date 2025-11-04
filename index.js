
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

app.get('/Kandang', async (req, res) => {
  try {
    const Kandang = await db.Kandang.findAll();
    res.send(Kandang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


app.put('/Kandang/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const Kandang = await db.Kandang.findByPk(id);
    if (!Kandang) {
      return res.status(404).send({ message: "data Kandang is not found" });
    }
    await Kandang.update(req.body);
    res.send({ message: "Data Kandang berhasil diupdate", data: film });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

