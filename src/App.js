import './App.css';
import {useState} from 'react';

function App() {
  
  const [numeroUno, setNumeroOne]= useState('');
  const [numeroDos, setNumeroDos] = useState('');
  const [resultado, setResultado] = useState(0); 
  const [operacionActual, setOperacionActual] = useState('');

  const clickNumber = (valor) => {
    if( operacionActual === '') {
      setNumeroOne( numeroUno + valor )
    }else
    setNumeroDos( numeroDos + valor)
  }

  const operation = (valor) => {
    setOperacionActual(valor)
  }

  // const resultado = () => {
  //   setNumeroOne 
  // }


  return (
    <>
    <h2>Calculadora</h2>
    <div className="App">
        <div className='calculadora-grid'>
          <div className='output'>
            <div className='operacionAnterior'>{ numeroUno ? numeroUno + operacionActual + numeroDos : ''}</div>
            <div className='operacionActual'></div>
          </div>
          <button onClick={()=> {}} className='span'>AC</button>
          <button onClick={()=> {}}>DEL</button>
          <button onClick={() => operation('/')}>/</button>
          <button onClick={()=> clickNumber(7)}>7</button>
          <button onClick={()=> clickNumber(8)}>8</button>
          <button onClick={()=> clickNumber(9)}>9</button>
          <button onClick={() => operation('*')}>*</button>
          <button onClick={()=> clickNumber(4)}>4</button>
          <button onClick={()=> clickNumber(5)}>5</button>
          <button onClick={()=> clickNumber(6)}>6</button>
          <button onClick={() => operation('+')}>+</button>
          <button onClick={()=> clickNumber(1)}>1</button>
          <button onClick={()=> clickNumber(2)}>2</button>
          <button onClick={()=> clickNumber(3)}>3</button>
          <button onClick={() => operation('-')}>-</button>
          <button onClick={()=>{}}>.</button>
          <button onClick={()=> clickNumber(0)}>0</button>
          <button onClick={()=>{}} className='span'>=</button>
        </div>
    </div>
    </>
  );
}

export default App;
