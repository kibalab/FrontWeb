import logo from './Logo.png';
import bg from './background.jpg';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <div className="App">
        <header className="App-header">
          <div className="App-Thumbnail">
            <img src={bg} className="App-background" alt="logo" />
          </div>
        </header>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-header">
        <img src={logo} className="Menu-logo" alt="logo" />
        <div className="MenuItems">
          <a className="MenuItems-item">
            HELLO
          </a>
          <a className="MenuItems-item">
            HELLO
          </a>
          <a className="MenuItems-item">
            HELLO
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
