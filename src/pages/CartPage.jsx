import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../redux/cartSlice';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Plant</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} /></td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="checkout-btn">Checkout (Coming Soon)</button>
            <Link to="/products">
              <button className="continue-btn">Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
