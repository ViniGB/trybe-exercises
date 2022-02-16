import './App.css';

// Parte 1 do Requisito 2
// const text = 'Aprendendo React';

// Parte 2 do Requisito 2
const text = ['Academia', 'Estudar React', 'Preparar refeições', 'Tempo de lazer'];

const Task = (value) => {
  return (
    <li key={value}>
      {value}
    </li>
  );
}

function App() {
  return (
    <ul>
      { text.map((currTask) => Task(currTask)) }
    </ul>
  );
}

export default App;
