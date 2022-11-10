import logo from './Logo.png';
import bg from './background.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="App-Thumbnail">
            <img src={bg} className="App-background" alt="logo" />
          </div>
        </header>
      </div>
      <Menu />
    </div>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-header">
        <img src={logo} className="Menu-logo" alt="logo" />
      </div>
      <div className="MenuItems">
        <MenuItem itemName="Item01" />
        <MenuItem itemName="Item02" />
        <MenuItem itemName="Item03" />
      </div>
    </div>
  );
}

function MenuItem(prop)
{
  return (
    <a className="MenuItems-item">
      {prop.itemName}
    </a>
  );
}

export default App;
