const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/partidaController.js');

// Rotas de CRUD
router.post('/', partidaController.criarPartida);
router.get('/', partidaController.listarPartidas);
router.put('/:id', partidaController.atualizarPartida);

// Rotas de Participação
router.get('/:partidaId/participantes', partidaController.listarParticipantes);
router.put('/:partidaId/participantes/:jogadorId', partidaController.atualizarStatusParticipante);

// Rotas Transacionais
router.post('/:partidaId/solicitar-participacao', partidaController.solicitarParticipacao);
router.post('/:partidaId/participantes/:participacaoId/avaliar', partidaController.avaliarSolicitacao);

module.exports = router;
