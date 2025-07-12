import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="logo">🌿 Paradise Nursery</div>
      <nav>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          Cart
          <span className="cart-count">{totalQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
