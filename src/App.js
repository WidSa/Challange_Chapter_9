import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import GameList from './pages/GameList'
import GameDetail from './pages/GameDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game-list" element={<GameList />} />
        <Route path="/game-detail" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
