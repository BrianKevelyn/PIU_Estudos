import React from 'react';
import Card from './Card';

const Galeria = ({ personagens, onCardClick }) => {
  return (
    <div className="galeria">
      {personagens.map((personagem) => (
        <Card
          key={personagem.id}
          nome={personagem.nome}
          imagem={personagem.imagem}
          onClick={() => onCardClick(personagem)}
        />
      ))}
    </div>
  );
};

export default Galeria;
