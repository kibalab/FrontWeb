import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      /*
      <header className="App-header">
        
      </header>
      */
    </div>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <img src={logo} className="Menu-logo" alt="logo" />
      </header>
    </div>
  );
}

export {App, Menu};
