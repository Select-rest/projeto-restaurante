const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/meu_banco', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB.');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
});

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor do restaurante funcionando.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
