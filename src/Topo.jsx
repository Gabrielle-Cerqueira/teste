import React, { useState } from 'react';
import Cadastro from './FormCadastro';
import Leitura from './FormLer';
import Atualiza from './FormAtualiza';
import Delete from './FormDelete';
import './Style.css';

function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <header className="header">
            <nav>
                <ul className="menu">
                    <li onClick={() => cliqueSecao('home')} className="menu_button">Início</li>
                    <li onClick={() => cliqueSecao('biblioteca')} className="menu_button">Adicionar a Minha Lista!</li>
                    <li onClick={() => cliqueSecao('ver')} className="menu_button">Ver Minha Lista!</li>
                    <li onClick={() => cliqueSecao('atualizar')} className="menu_button">Atualizar Minha Lista!</li>
                    <li onClick={() => cliqueSecao('apagar')} className="menu_button">Apagar Itens</li>
                    <li onClick={() => cliqueSecao('citacoes')} className="menu_button">Meu Diário</li>
                </ul>
            </nav>

            <div className="content">
                {secaoAtual === 'home' && (
                    <div className="secao">
                        <h1 className='t1'>Seja Bem-vindo a, <br/> Lumos Library </h1>
                    </div>
                )}
                {secaoAtual === 'biblioteca' && (
                    <div className="secao">
                        <Cadastro />
                    </div>
                )}
                {secaoAtual === 'ver' && (
                    <div className="secao">
                        <Leitura />
                    </div>
                )}
                {secaoAtual === 'atualizar' && (
                    <div className="secao">
                        <Atualiza />
                    </div>
                )}
                {secaoAtual === 'apagar' && (
                    <div className="secao">
                        <Delete />
                    </div>
                )}

                {secaoAtual === 'citacoes' && (
                    <div className="secao">
                        <h1 className='t1'>Desculpa Viajante,<br/>esta história ainda <br/> está sendo construída..</h1>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Topo;
