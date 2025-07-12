import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plants from '../data/plants';
import { addToCart } from '../redux/cartSlice';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons([...disabledButtons, plant.id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-list">
      <h2>🌱 Explore Our Plants</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={disabledButtons.includes(plant.id)}
                  >
                    {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
