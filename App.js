import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useState } from 'react';

function MyCalculator() {
  const [count1, setCount1] = useState(0);  //criando variaveis para manipular e contar o numero de clicks
  const [count2, setCount2] = useState(0);
  const [result, setResult] = useState(0);

  function handleClick1() {
    setCount1(count1 + 1);
  }

  function handleClick2() {
    setCount2(count2 + 1);
  }

  function handleClick() {
    setResult(count1+count2);
    //alert('SOMA:', result);
  }

  return (
    <><button onClick={handleClick1}>
      Valor 1: {count1}
    </button>
    <button onClick={handleClick2}>
      Valor 2: {count2}
    </button>
    <button onClick={handleClick}>
      Soma: {result}
    </button>
    </>
    
  );
}

function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MyCalculator />
      </header>
    </div>
  );
}
export default MyApp;
