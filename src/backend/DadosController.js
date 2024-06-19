import { create, read, update, deleteLiv } from './DadosModel.js';

//INSERT
export async function createLivros(req, res){
    const {nome, autor, status, paginas} = req.body;
    console.log('Dados recebidos do frontend: ', {nome, autor, status, paginas});
   
    create(nome, autor, status, paginas, (err, result) => {
       if(err){
        res.status(500).json({error: err.message });
        return;
       } 
       res.status(201).json({ mensagem: 'Livro Adicionado com sucesso!'});
    });
}

//READ
export async function getAllLivros(req, res) {
    read((err, livros) => {
        if (err) {
            res.status(500).json({ error: err.message})
        }
        res.json(livros);
    });
}

//UPDATE
export async function updateLivros(req, res) {
    const { id } = req.params;
    console.log('Dados recebidos do frontend:', {id});
    const {nome, autor, paginas} = req.body;
    update(id, nome, autor, paginas, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Livro Atualizado com Sucesso!');
    });
}

//INATIVANDO
export async function deleteLivros(req, res) {
    const {id} = req.params;
    console.log('Delete recebidos do frontent', {id});
    deleteLiv(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.send('Livro excluído com sucesso!');
    });
}