import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup';
import Login from './Pages/Login';

import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
