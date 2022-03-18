import './App.css';
import {useState} from 'react';
import { click } from '@testing-library/user-event/dist/click';

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

  const eliminarTodo =  () => {
    setNumeroOne('')
    setNumeroDos('')
    setResultado(0)
    setOperacionActual('')
  }

  const eliminarUno = () => {
      if( operacionActual === ''){
        setNumeroOne(numeroUno.toString().slice(0, -1));
      }
      else if(operacionActual != '')
        setOperacionActual(operacionActual.toString().slice(0, -1));
      
      else{
        setNumeroDos(numeroDos.toString().slice(0, -1));
      }
  }

  const result = () => {
    switch (operacionActual) {
      case '+':
        setResultado(parseInt(numeroUno) + parseInt(numeroDos));
        break;

      case '-':
        setResultado(parseInt(numeroUno) - parseInt(numeroDos));
      break;

      case '/':
        setResultado(parseInt(numeroUno) / parseInt(numeroDos));
      break;

      case '*':
        setResultado(parseInt(numeroUno) * parseInt(numeroDos));
        break;
    
      default:
        break;
    }
  }


  return (
    <>
    <h2>Calculadora</h2>
    <div className="App">
        <div className='calculadora-grid'>
          <div className='output'>
            <div className='operacionAnterior'>{ numeroUno ? numeroUno + operacionActual + numeroDos : ''}</div>
            <div className='operacionActual'>{resultado}</div>
          </div>
          <button onClick={eliminarTodo} className='span'>AC</button>
          <button onClick={()=> eliminarUno()}>DEL</button>
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
          <button onClick={()=>{clickNumber('.')}}>.</button>
          <button onClick={()=> clickNumber(0)}>0</button>
          <button onClick={result} className='span'>=</button>
        </div>
    </div>
    </>
  );
}

export default App;
