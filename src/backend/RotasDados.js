import express from "express";
const app = express();
import cors from "cors";
import { getAllLivros, createLivros, updateLivros, deleteLivros } from "./DadosController.js";

app.use(express.json());
app.use(cors());

app.get('/livros', getAllLivros);
app.post('/livros', createLivros);
app.put('/pessoas/:id', updateLivros);
app.delete('/livros/:id', deleteLivros);

app.listen(3000, () => {
    console.log(`Servidor Rodando com sucesso na porta 3000`);
});