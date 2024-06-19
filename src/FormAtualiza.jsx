import React, { useState } from 'react';
import './Style.css'

function FormAtualiza() {
    const [formDados, setFormDados] = useState({
        nome: '',
        autor:'',
        paginas:'',
        status:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDados(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         console.log("Dados a serem enviados:", formDados.id);
         const response = await fetch(`http://localhost:3000/livros/${formDados.id}`, {
            method: 'PUT',
            headers: {
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
        <div className='container_atualiza'>
            <form onSubmit={handleSubmit}>
               <label className='at_id'>ID a Ser Atualizado <br/> <input type="text" name="id" value={formDados.id} onChange={handleChange} /> </label>
              <br/><br/> 
              <div className='at_2'> <label>Novo Nome</label> <br/> <input type="text" name="nome" value={formDados.nome} onChange={handleChange} />  </div>
              <br/>
              <div className='at_3'> <label>Novo Autor</label> <br/> <input type="text" name="autor" value={formDados.autor} onChange={handleChange} />  </div>
              <br/>
              <div className='at_4'> <label>Quantidade de Páginas</label> <br/> <input type="text" name="paginas" value={formDados.paginas} onChange={handleChange} /> </div>
              <br/>
              <div className='bt_atualiza'> <button type="submit" onClick={handleSubmit}> Atualizar Minha Lista </button> </div>
            </form>
        </div>
    );    

}

export default FormAtualiza;