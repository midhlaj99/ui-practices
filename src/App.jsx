import { useState } from "react";

import TopBar from "./components/topbar/TopBar"
import Intro from "./components/intro/Intro"
import Intro2 from "./components/intro2/Intro2"
import Intro3 from "./components/intro3/Intro3"
import Intro4 from "./components/intro4/Intro4"
import Menu from "./components/menu/Menu";

import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />  
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>    
      <div className="section">
        <Intro />
        <Intro2 />
        <Intro3 />
        <Intro4 />
      </div>
    </div>
  );
}

export default App;
