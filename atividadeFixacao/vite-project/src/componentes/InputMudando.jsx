import { useState } from 'react'
import { useEffect } from 'react';

export default function InputMudando(){
  const [texto, setTexto] = useState('');
  const [corAtual, setCorAtual] = useState('');
  const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    setCorAtual(cores[indiceAleatorio]);
    document.body.style.backgroundColor = cores[indiceAleatorio];
      }, [texto]);

  return (
    <input 
      type="text" 
      value={texto} 
      onChange={handleChange} 
      placeholder="Digite algo"
    />
  );
}