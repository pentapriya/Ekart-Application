
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import ProductList from './Components/Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* Product List Page */}
          <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
