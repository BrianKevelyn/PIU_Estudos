import { useState } from 'react'
import './App.css'
import Escopo from './componentes/Escopo'
import Redux from './componentes/Redux'
import CorNova from './componentes/CorNova'
import Change from './componentes/Change'
import AparecerImagem from './componentes/AparecerImagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Escopo></Escopo>
      <Redux></Redux>
      <CorNova></CorNova>
      <Change></Change>
      <AparecerImagem></AparecerImagem>
    </>
  )
}

export default App
