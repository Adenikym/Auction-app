import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup';
import Login from './Pages/Login';
import Wallet from './Pages/Wallet';

import './App.css';
import Landing from './Pages/Landing';

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
