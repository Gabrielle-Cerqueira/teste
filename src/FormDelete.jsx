import React, {useState, useEffect} from 'react';
import './Style.css'

function FormDelete() {
    const [formDados, setFormDados] = useState({
        id:''
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

        try{
            console.log("Dados a serem enviados: ", formDados.id);
            const response = await fetch(`http://localhost:3000/livros/${formDados.id}`, {
             method: 'DELETE',
             headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(formDados)   
            });

            const json = await response.json();
            console.log(response)
            console.log(json);
        } catch (err) {
            console.error("Erro ao enviar", err)
        }
    };

    return (
        <div className='container_del'> 
            <form onSubmit={handleSubmit}>
                <label className='del_tt'>ID a ser deletado:</label>
                <label> <br/><input type="text" name="id" value={formDados.id} onChange={handleChange} className='del_in'/> </label>
                <br/>
                <div className='bt_del'>
                    <button type="submit" onClick={handleSubmit}> Deletar </button>
                </div>
                
                <br/>
            </form>
        </div>
    );

};

export default FormDelete;