import { Routes, Route } from 'react-router-dom';
import Signup from './containers/signup';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
