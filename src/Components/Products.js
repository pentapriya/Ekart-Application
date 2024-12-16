
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { addItem } from '../store/cartSlice'; 
import { product } from './ProductsList';
import { useState } from 'react';

const ProductList = () => {
  const dispatch = useDispatch(); 
  const [showMessage, setShowMessage] = useState(false);

  
  const products =product


  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>
      <h2>Latest Arrivals</h2>
      <div className='maindiv'>
        {products.map((product) => (
          <div key={product.id}>
            <div className='productdiv'>
            <img src={product.imageURL} className='productimage' alt=''/>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
            
          </div>
        ))}
      </div>
      {showMessage && (
        <div className="notification">
          Item added to cart successfully!
        </div>
      )}
    </div>
  );
};

export default ProductList;
