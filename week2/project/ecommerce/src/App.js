
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductsList from './pages/productsList/ProductsList'
import ProductDetails from './pages/productDetails/ProductDetails'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/product/:id" element={<ProductDetails /> } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
