import './App.css';
import {Routes, Route} from 'react-router-dom';
import Overlay from './pages/Overlay'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/Overlay" element={<Overlay/>} />
      <Route path="/" element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;