import React, {useState} from 'react';
import './Style.css';

function FormCadastro(){
    const [formDados, setFormDados] = useState({
        nome: '',
        autor:'',
        paginas:'',
        status:'',
        //nota:'',

    });

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setFormDados(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    

   try {
    console.log("Dados a serem enviados", formDados);
    const response = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headrs: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDados)
    });

    const json = await response.json();
    console.log(response)
    console.log(json);
   } catch (err) {
    console.error("Erro ao Enviar", err)
   }    
};

return (
    <div className='container_cad'>
        <form onSubmit={handleSubmit}>
        <label className="campo_1"> Livro: <br/> </label>
        <input type="text" name="nome" value={formDados.nome} onChange={handleChange}/> <br/> 

        <label className="campo_1">Autor:</label> <br/> <input type="text" name="autor" value={formDados.autor} onChange={handleChange}/>  <br/>
        <label className="campo_3"> Quantidade de Páginas: </label> <br/> <input type="number" name="paginas" value={formDados.paginas} onChange={handleChange}/> <br/>

        <label className="campo_4"> Lido! </label> <br/> <input type="radio" name="status" value = "1" onChange={handleChange}/> <br/> 
        <label className="campo_4"> Em Andamento! </label> <br/> <input type="radio" name="status" value = "2" onChange={handleChange}/> <br/> 
        <label className="campo_4"> Na Lista! </label> <br/> <input type="radio" name="status" value = "3" onChange={handleChange}/> <br/>  

        <div className='bt_cad'><button type="submit" value="Adicionar">Adicionar</button> </div>
        </form>
        
    </div>
);

};

export default FormCadastro;