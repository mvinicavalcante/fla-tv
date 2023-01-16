import './App.css';
import Header from './components/Header';

import Home from './pages/Home';
import Tabelas from './pages/Tabelas';
import Elenco from './pages/Elenco';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tabelas" element={<Tabelas />}/>
          <Route path="/elenco" element={<Elenco />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
