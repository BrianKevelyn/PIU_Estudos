import React from 'react';

const Detalhes = ({ nome, descricao, imagem }) => {
  return (
    <div className="detalhes">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <img src={imagem} alt={nome} className="detalhes-img" />
    </div>
  );
};

export default Detalhes;
