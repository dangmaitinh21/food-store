import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Menu from '~/pages/Menu';
import PaymentSuccess from '~/pages/PaymentSuccess';
import { useSelector } from 'react-redux';
import { cartProducts } from '~/stores/cart/cartSlice';

function Navigation() {
  const productsInCart = useSelector(cartProducts);
  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/#register" element={<Register />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
