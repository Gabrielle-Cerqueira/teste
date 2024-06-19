  import React, {useState} from 'react';
  import Cadastro from './FormCadastro';
  import Leitura from './FormLer';
  import Atualiza from './FormAtualiza';
  import Delete from './FormDelete';
  import Topo from './Topo.jsx';
  import './App.css';


  //PROVÁVEL MENU, APP.JSX DE TESTER

  const App = () => {
    const [currentPage, setCurrentPage] = useState(null);
    
    const renderPage = () => {
      switch (currentPage) {
        case 'create':
          return <Cadastro />;
        case 'read':
          return <Leitura />; 
        case 'up':
          return <Atualiza />;
        case 'del':
          return <Delete />;   
                
      }
    };

  return (
    <div>

    </div>
  );

  };

  export default App;