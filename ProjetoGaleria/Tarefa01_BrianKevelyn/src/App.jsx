import { useState } from 'react';
import Card from './componentes/Card';
import Detalhes from './componentes/Detalhes';
import Tema from './componentes/Tema';
import Galeria from './componentes/Galeria';
import Dropdown from './componentes/Dropdown';
import './App.css';

import person1 from './assets/Neymar.jpg';
import person2 from './assets/Davi.jpeg';
import person3 from './assets/ChicoMoedas.png';
import person4 from './assets/FilipeRet.jpg';
import person5 from './assets/Matue.png';
import person6 from './assets/LuisAraujo.png';


//array de objetos para armazenar as informações necessárias sobre cada personagem como nome , a sua descrição e o seu arquivo de imagem (todos importados aqui mesmo em App).
const characters = [
  {
    id: 1,
    name: 'Neymar',
    description: 'Melhor do mundo.',
    image: person1
  },
  {
    id: 2,
    name: 'Davi',
    description: 'Resenha.',
    image: person2
  },
   {
    id: 3,
    name: 'Chico Moedas',
    description: 'Eu tentei.',
    image: person3
  },
  {
    id: 4,
    name: 'Filipe Ret',
    description: 'R-E-T do TTK.',
    image: person4
  },
   {
    id: 5,
    name: 'Matue',
    description: 'Maconheiro.',
    image: person5
  },
  {
    id: 6,
    name: 'Luis Araújo',
    description: 'LA7.',
    image: person6
  }

];

export default function App() {


  return (
    <>
    <Dropdown></Dropdown>
    <Tema>

      <h1>Galeria de Personagens</h1>
      {/* O componente Galeria aqui está sendo passado como children para o componenete Tema. Galeria recebe por props o array de objetos com as informações dos personagens */}
      <Galeria characters={characters}/>
    </Tema>

    </>
  );
}