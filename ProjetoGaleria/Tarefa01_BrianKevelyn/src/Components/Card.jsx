import React from 'react';

const Card = ({ nome, imagem, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagem} alt={nome} className="card-img" />
      <h3>{nome}</h3>
    </div>
  );
};

export default Card;
