import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';   // Nav.js ligger i mappen "components"
import Kalkulator from './pages/Kalkulator';
import Products from './pages/Products';
import SingleProduct from "./pages/SingleProduct";


function App() {

  return (
    <div className="App">
<Router>
<Nav/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/kalkis" element={ <Kalkulator/> } />
    <Route path="/products" element={ <Products/> } />
    <Route path="/products/:id" element={ <SingleProduct/> } />


  </Routes>
</Router>
    </div>
  );
}

export default App;
