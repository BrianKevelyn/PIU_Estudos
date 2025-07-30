import React, { useState } from 'react';
import './Forms.css';

export default function Forms() {
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('white');

  const enviar = (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = cor; 
  };

  return (
    <div>
      <form onSubmit={enviar}>
        <h1>Formulário</h1>

        <div className="box">
        <input type="text" placeholder="Informe seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

          <select value={cor} onChange={(e) => setCor(e.target.value)}>
            <option value="white">Branco</option>
            <option value="red">Vermelho</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
            <option value="yellow">Amarelo</option>
            <option value="gray">Gray</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
