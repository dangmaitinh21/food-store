import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cartIcon from '~/assets/icons/cart.svg';
import foody from '~/assets/images/foody.png';
import Button from '~/components/elements/Button';

function Header({ cartCount }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggout = () => {
    sessionStorage.removeItem('Auth Token');
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth Token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    window.addEventListener('storage', checkAuthToken);
    return () => {
      window.removeEventListener('storage', checkAuthToken);
    };
  }, []);
  return (
    <nav id="header" className="bg-black text-white">
      <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img
              src={foody}
              alt="foody logo"
              className="w-40 h-40 object-cover"
            />
          </Link>
        </div>
        <div className="menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="About" className="text-xl">
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="cart" />
            {cartCount > 0 ? (
              <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -bottom-3 -right-3">
                {cartCount}
              </div>
            ) : null}
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLoggout}>Logout</Button>
          ) : (
            <>
              {' '}
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
