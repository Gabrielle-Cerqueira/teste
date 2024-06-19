import React, {useState, useEffect} from 'react';
import './Style.css'

function FormLeitura() {
    const [consultaDados, setconsultaDados] = useState ([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //GET só resgata dados
        try{
            const response = await  fetch('http://localhost:3000/livros', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setconsultaDados(data);    
        } catch (err) {
            console.error("Erro ao buscar dados do banco", err);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []); 
    
    return (
        <div className='container_red'>
            <div className='bt'> <button type="submit"> Leitura de Dados </button> </div>

             <div className='lista_ct'>
                <ol>
                    {consultaDados.map((linha, index) => (
                        <div className='list'>
                            <li key={index}>
                                <br/> <label>Nome: <br/> {linha.nome} </label> <br/>
                                <br/> <label>Autor: <br/> {linha.autor} </label> <br/>
                                <br/> <label>Páginas: <br/> {linha.paginas} </label> <br/>
                                <br/> <label>Status: <br/> {linha.status} </label> <br/>
                            </li>
                        </div>
                    ))}       
                </ol>             
             </div>   
        </div>
    );

}

export default FormLeitura;