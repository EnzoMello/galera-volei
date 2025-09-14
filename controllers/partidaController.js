
// POST /partidas
exports.criarPartida = (req, res) => {
    const { ID_organizador, Local, Data_hora, Tipo_partida, Categoria } = req.body;
    console.log('Recebido para criação de partida:', req.body);

    const novaPartida = {
        ID: Math.floor(Math.random() * 1000),
        ID_organizador,
        Status: "Nova",
        Local,
        Data_hora,
        Tipo_partida,
        Categoria
    };

    res.status(201).json(novaPartida);
};

// GET /partidas
exports.listarPartidas = (req, res) => {
    res.status(200).json([]);
};

// PUT /partidas/:id
exports.atualizarPartida = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`Recebida atualização para partida ID ${id}:`, req.body);
    const partidaAtualizada = { ID: id, ...req.body };
    res.status(200).json(partidaAtualizada);
};

// GET /partidas/:partidaId/participantes
exports.listarParticipantes = (req, res) => {
    const partidaId = parseInt(req.params.partidaId);
    console.log(`Buscando participantes da partida ID ${partidaId}`);
    res.status(200).json([]); 
};

// PUT /partidas/:partidaId/participantes/:jogadorId
exports.atualizarStatusParticipante = (req, res) => {
    const { partidaId, jogadorId } = req.params;
    const { status } = req.body;

    console.log(`Atualizando status para '${status}' do jogador ${jogadorId} na partida ${partidaId}`);
    
    const resposta = {
        id: Math.floor(Math.random() * 1000),
        jogador_id: parseInt(jogadorId),
        partida_id: parseInt(partidaId),
        status: status
    };
    res.status(200).json(resposta);
};


// POST /partidas/:partidaId/solicitar-participacao
exports.solicitarParticipacao = (req, res) => {
    const partidaId = parseInt(req.params.partidaId);
    const { jogador_id } = req.body;
    console.log(`Jogador ${jogador_id} solicitou participação na partida ${partidaId}`);
    
    const novaParticipacao = {
        id: Math.floor(Math.random() * 1000),
        jogador_id: jogador_id,
        partida_id: partidaId,
        status: "pendente" 
    };
    res.status(201).json(novaParticipacao);
};

// POST /partidas/:partidaId/participantes/:participacaoId/avaliar
exports.avaliarSolicitacao = (req, res) => {
    const participacaoId = parseInt(req.params.participacaoId);
    const { acao } = req.body;
    console.log(`Ação '${acao}' para a participação ID ${participacaoId}`);
    
    const resposta = {
        id: participacaoId,
        status: (acao === 'aceitar') ? 'confirmada' : 'rejeitada'
    };
    res.status(200).json(resposta);
};