// import React, {useState} from 'react';
import React from 'react';
import './App.css';

import Desafio from './components/Desafio'
import Numero from './components/Numero'
import Propriedades from './components/Pr'
import Recesso from './components/Recesso'
import Sorteio from './components/Sorteio'


function App() {
  // const [min, setMin] = useState(10)
  // const [max, setMax] = useState(100)

  return (
    <div className='App'>
      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>
      
      <div className='linha'>
        {/* <Intervalo min={min} max={max} 
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Desafio ></Desafio>
      </div>

      <div className='linha'>
        {/* <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> */}
        <Numero></Numero>
        <Propriedades></Propriedades>
        <Sorteio></Sorteio> 
      </div>

      <div className='linha'>
        {/* <Intervalo min={min} max={max} 
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Recesso ></Recesso>
      </div>

    </div>
  )
}

export default App;