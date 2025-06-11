import React from 'react';
import { carros } from './dados_carro'; //Aqui eu importo o "dados_carros" que foi algo que o senho me deu

const ListaCarros = () => {
 
    //Aqui ele mapeia os carros que tem para cada "li" para conter o id, modelo e cor. obrigatoriamente para usar o map precisa usar o id para poder ficar uma key que não se repete para cada carro se não fizer isso dá erro
  const listaModelosCores = carros.map((carro) => (
    <li key={carro.id}>
      Modelo: {carro.modelo} - Cor: {carro.cor}
    </li>
  ));

 //Filtra os carros pelo ano. Se for maior que o ano de 2019 ele pega e mapeia. Ai ele puxa o id, modelo e ano tudo dentro da lista
  const listaAnoMaior2019 = carros
    .filter((carro) => carro.ano > 2019)
    .map((carro) => (
      <li key={carro.id}>
        Modelo: {carro.modelo} - Ano: {carro.ano}
      </li>
    ));

  return (
    <div>
      <h2>Todos os Carros (Modelo e Cor)</h2>
      <ul>
        {listaModelosCores} {}
      </ul>

      <h2>Carros com Ano Superior a 2019</h2>
      <ul>
        {listaAnoMaior2019} {}
      </ul>
    </div>
  );
};

export default ListaCarros;
