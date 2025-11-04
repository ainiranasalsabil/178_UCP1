
const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/kandang', async (req, res) => {
  try {
    const kandang = await db.kandang.create(req.body);
    res.send(kandang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/kandang', async (req, res) => {
  try {
    const Kandang = await db.kandang.findAll();
    res.send(Kandang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


app.put('/kandang/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kandang = await db.kandang.findByPk(id);
    if (!kandang) {
      return res.status(404).send({ message: "data Kandang is not found" });
    }
    await kandang.update(req.body);
    res.send({ message: "Data Kandang berhasil diupdate", data: kandang });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/kandang/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kandang = await db.kandang.findByPk(id);
    if (!kandang) {
      return res.status(404).send({ message: "data Kandang is not found" });
    }
    await kandang.destroy();
    res.send({ message: "Data Kandang berhasil dihapus" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database sync error:', err);
  });

