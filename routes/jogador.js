const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController.js');

// Define as rotas e associa aos métodos do controller
router.post('/', jogadorController.criarJogador);
router.get('/', jogadorController.listarJogadores);
router.get('/:id', jogadorController.obterJogadorPorId);
router.put('/:id', jogadorController.atualizarJogador);

module.exports = router;
