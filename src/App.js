import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> /* Why not render?? */
      </header>
    </div>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-header">
        <img src={logo} className="Menu-logo" alt="logo" />
      </div>
    </div>
  );
}

export {App, Menu};
