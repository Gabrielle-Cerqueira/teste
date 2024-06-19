import connection from './db.js';

export function read(callback){
    connection.query('SELECT * from livros', callback);

}

export function create(nome, autor, status, paginas,callback){
    connection.query('INSERT INTO livros (nome,autor,status,paginas) VALUES (?, ?, ?, ?)', [nome, autor, status, paginas], callback);
}

export function update(nome,autor,status,paginas,id, callback){
  connection.query("UPDATE livros SET  nome = ?, autor = ?, status = ?, paginas = ?, WHERE id_Livros = ?", [nome,autor,status,paginas,id], callback);  
}

export function deleteLiv(id, callback){
    connection.query('DELETE from livros WHERE id_livros = ?', [id], callback);
}