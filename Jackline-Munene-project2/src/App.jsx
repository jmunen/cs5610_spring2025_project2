import EasyGamePage from './components/EasyGamePage.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import Navbar from './components/Navbar.jsx';
import NormalGamePage from './components/NormalGamePage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import RulesPage from './components/RulesPage.jsx';
import ScoresPage from './components/ScoresPage.jsx';
import SelectionPage from './components/SelectionPage.jsx';
import { GameProvider } from './context/GameContext.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <GameProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/games/easy" element={<EasyGamePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/games/normal" element={<NormalGamePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/scores' element={<ScoresPage/>}/>
        <Route path='/games' element={<SelectionPage/>}/>
      </Routes>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App
