const express = require('express');
const app = express();
const port = 3000;

const jogadorRoutes = require('./routes/jogador.js');
const partidaRoutes = require('./routes/partida.js');

app.use(express.json());

app.use('/jogadores', jogadorRoutes);
app.use('/partidas', partidaRoutes);

app.get('/', (req, res) => {
    res.send('API Galera do Vôlei está no ar!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
