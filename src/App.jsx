import { useState, useEffect } from 'react';
import './App.css';
import { Placar } from './components/placar';
import { Save } from './components/Save';

function App() {
  const [count, setCount] = useState(0);
  const [save, setSave] = useState(null);
  const [autor, setAutor] = useState('');
  const [autoC, setAC] = useState();

  const saveP = () => {
    setAutor(prompt('Diga seu nome:'));
    setSave(count);
  };
  
  useEffect(() => {
        let interval;
        if(autoC){
          interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
          },1000)
        }
        return () => {
          clearInterval(interval)
        }
  },[autoC]);

  return (
    <>
      <h2>Botão para contar:</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <h2>count is {count}</h2>
      <Placar count={count} />
      <button onClick={saveP}>Salvar</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(save)}>Voltar</button>
      {count > 1 && (
        <div>
          Auto Click :
          <button onClick={() => setAC(1)}>on</button>
          <button onClick={() => setAC(0)}>off</button>
        </div>
      )}

      {save !== null ? (
        <Save autor={autor} placar={save} />
      ) : (
        <h2>Nenhum Progresso registrado</h2>
      )}
    </>
  );
}

export default App;
