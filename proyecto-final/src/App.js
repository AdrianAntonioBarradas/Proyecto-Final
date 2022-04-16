import { BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate}
   from "react-router-dom";
import './App.css';
import Footer from "./vista/componentes/Footer";
import Header from './vista/componentes/Header.js';

function App() {
  return (
    <div className="App">

    <Router>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
