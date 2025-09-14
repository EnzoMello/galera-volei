
// POST /jogadores
exports.criarJogador = (req, res) => {
    const { Nome, Email, Senha, Sexo, Data_nasc, Nível } = req.body;

    console.log('Recebido para criação:', req.body);
    
    const jogadorCriado = {
        ID: Math.floor(Math.random() * 1000), // Um ID aleatório
        Nome,
        Email,
        Sexo,
        Data_nasc,
        Nível
    };

    res.status(201).json(jogadorCriado);
};

// GET /jogadores
exports.listarJogadores = (req, res) => {
    res.status(200).json([]); 
};

// GET /jogadores/:id
exports.obterJogadorPorId = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`Tentativa de busca pelo jogador com ID: ${id}`);
    res.status(404).json({ erro: `Jogador com ID ${id} não encontrado.` });
};

// PUT /jogadores/:id
exports.atualizarJogador = (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = req.body;
    
    console.log(`Recebida atualização para o ID ${id}:`, dadosAtualizados);

    const jogadorAtualizado = {
        ID: id,
        ...dadosAtualizados
    };

    res.status(200).json(jogadorAtualizado);
};