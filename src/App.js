import logo from './Logo.png';
import bg from './background.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <AppThumbnail />
      </div>
      <Menu />
    </div>
  );
}

function AppThumbnail()
{
  return(
    <header className="App-header">
      <div className="App-Thumbnail">
        <img src={bg} className="App-background" alt="logo" />
      </div>
    </header>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-header">
        <img src={logo} className="Menu-logo" alt="logo" />
      </div>
      <div className="MenuItems">
        <MenuItem itemName="행사 소개" />
        <MenuItem itemName="서클 참가" />
        <MenuItem itemName="통신 판매" />
        <MenuItem itemName="코스프레" />
        <MenuItem itemName="카메라" />
        <MenuItem itemName="일반 방문" />
        <MenuItem itemName="COVID-19" />
      </div>
    </div>
  );
}

function MenuItem(prop)
{
  return (
    <div className="MenuItems-item">
      {prop.itemName}
    </div>
  );
}

export default App;
