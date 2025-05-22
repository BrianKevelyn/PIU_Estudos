import React from 'react';

const Tema = ({ onClick }) => {
  return (
    <button onClick={onClick} className="botao-tema">
      Alternar Tema
    </button>
  );
};

export default Tema;
