import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Pay from './componentes/Pay';
import Success from './componentes/Success';

function App() {
  return (
    <div className="App">
      <Link to="/pay">Payment page</Link>

      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
