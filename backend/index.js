const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/projeto-restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('API do Projeto Restaurante');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
