const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const TEST_SECRET = "SEGREDO_TESTE_123456";

// Segredo fictício removido após validação do Security Gate.

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    projeto: 'Pipeline Segura',
    status: 'online'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

app.get('/api/usuarios', (req, res) => {
  res.json([
    {
      id: 1,
      nome: 'Usuario Teste'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`API executando na porta ${PORT}`);
});