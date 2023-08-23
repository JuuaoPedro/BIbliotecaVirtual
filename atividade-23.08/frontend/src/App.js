import logo from './senai-165.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="sup">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meus Livros
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais Lidos
        </a>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
