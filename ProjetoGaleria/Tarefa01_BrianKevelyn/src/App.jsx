import React, { useState } from 'react';
import './App.css'; 

import personagem1 from './assets/Neymar.jpg';
import personagem2 from './assets/ChicoMoedas.png';
import personagem3 from './assets/Davi.jpeg';
import personagem4 from './assets/LuisAraujo.png';
import personagem5 from './assets/FilipeRet.jpg';
import personagem6 from './assets/Matue.png';


import Galeria from './Galeria';
import Detalhes from './Detalhes';
import Tema from './Tema';

const App = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const personagens = [
    { id: 1, nome: 'Personagem 1', imagem: personagem1, descricao: 'Descrição do personagem 1.' },
    { id: 2, nome: 'Personagem 2', imagem: personagem2, descricao: 'Descrição do personagem 2.' },
    { id: 3, nome: 'Personagem 3', imagem: personagem3, descricao: 'Descrição do personagem 3.' },
    { id: 4, nome: 'Personagem 4', imagem: personagem4, descricao: 'Descrição do personagem 4.' },
    { id: 5, nome: 'Personagem 5', imagem: personagem5, descricao: 'Descrição do personagem 5.' },
    { id: 6, nome: 'Personagem 6', imagem: personagem6, descricao: 'Descrição do personagem 6.' },
  ];

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  const selecionarPersonagem = (personagem) => {
    setPersonagemSelecionado(personagem);
  };

  return (
    <div className={`app ${temaEscuro ? 'dark' : 'light'}`}>
      <Tema onClick={toggleTema} />
      <Galeria personagens={personagens} onCardClick={selecionarPersonagem} />
      {personagemSelecionado && (
        <Detalhes
          nome={personagemSelecionado.nome}
          descricao={personagemSelecionado.descricao}
          imagem={personagemSelecionado.imagem}
        />
      )}
    </div>
  );
};

export default App;
