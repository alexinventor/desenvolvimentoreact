import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  const [contador, setContador] = useState(0);

  function handleButtonClick() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <Header title={contador} />
      <input type="button" value="Clique aqui" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
