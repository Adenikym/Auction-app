import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup';
import Login from './Pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
