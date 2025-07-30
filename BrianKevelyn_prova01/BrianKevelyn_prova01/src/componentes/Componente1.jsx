import React, { useState } from 'react';

export default function Count() {
  //const que ali fica o valor
  const [valor, setValor] = useState(0);

 //Aqui atualiza o valor com base no que
  const atualizarContador = (diferenca) => {
    setValor((prev) => prev + diferenca);
  };

  //Aqui tem o estilo de o botão quando for maior que 20 aumentar o botão de "+" diminuir
  const estiloIncremento = {
    padding: valor > 10 ? '20px 40px' : '10px 20px',
    fontSize: valor > 10 ? '15px' : '15px',
    marginRight: '10px',
  };

//Aqui tem o estilo de o botão quando for menor que 0 aumentar o botão de "-" diminuir
  const estiloDecremento = {
    padding: valor < 0 ? '5px 10px' : '10px 20px',
<<<<<<< Updated upstream
    fontSize: valor < 0 ? '15px' : '15px',
=======
    fontSize: valor < 0 ? '10px' : '10px',
>>>>>>> Stashed changes
    marginLeft: '10px',
  };

  //Após clicar no botão de "+" ou o de "-" ele vai em "atualizarContador" e usa o "setValor" e vê o valor, nisso ele pega o valor e se ele aperta no botão "+" ele envia o "+1" ele faz 1+1, se é o botão "-" vai ir para a função o "-1" que no caso vai ficar "1-1" por exemplo.
  //Resumindo ele pega e faz a diferença.
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button style={estiloIncremento} onClick={() => atualizarContador(1)}> + </button>
      <h1>{valor} Cliques</h1>
      <button style={estiloDecremento} onClick={() => atualizarContador(-1)}> - </button>
    </div>
  );
}
