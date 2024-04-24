import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';   // Nav.js ligger i mappen "components"
import Kalkulator from './pages/Kalkulator';


function App() {

  return (
    <div className="App">
<Router>
<Nav/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/kalkis" element={ <Kalkulator/> } />
  </Routes>
</Router>
    </div>
  );
}

export default App;
