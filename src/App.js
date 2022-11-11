import logo from './umiket.png';
import bg from './background.jpg';
import rin from './Rin.webp';
import dot from './Dot.png';
import keyIsland from './Key Island9.png';
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
        <img src={rin} className="App-background" alt="thumbnail" />
        
        <img style={{ backgroundImage: dot}}  className="App-background-Screen" alt="thumbnailScreen" />
        <div className='App-Thumbnail-Center'>
          <img src={keyIsland} className="App-Thumbnail-Title" alt="thumbnail" /><br/>
          <div style={{height: "1rem"}} className="App" /> <br/>
          <div className='App-Thumbnail-SubTitle'>2022-11-11 (Fri) ~ 2022-12-11 (Sun)</ div>
        </div>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <div className="MenuArea">
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
