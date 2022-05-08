import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
