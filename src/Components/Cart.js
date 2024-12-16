
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeItem,addItem,DecrementItem } from '../store/cartSlice'; 

const Cart = () => {
  const dispatch = useDispatch(); 
  const cartItems = useSelector((state) => state.cart.cartItems); 

  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product)); 
  };

  const DecrementCart=(product)=>{
    dispatch(DecrementItem(product))
  }

  
  const TotalCartPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price)*parseFloat(item.quantity), 0);
  };

  const FinalCartprice = () => {
    return parseFloat(TotalCartPrice().toFixed(2)) + 50 - 100;  
  };
  
  const handleIncrementCart = (product) => {
      dispatch(addItem(product));
    };

  return (
    <div>
      <h2 className="cartHeading">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cartContent'>Your cart is empty</p>
      ) : (
        <div>
          <div className="maincart">
            {cartItems.map((item) => (
              <div key={item.id} className="cartItems">
                <img src={item.imageURL} className="cartImage" alt="" />
                <div className="cartData">
                  {item.name} - ${item.price} 
                </div>
                <div className='cartData'>
                  <button onClick={()=>DecrementCart(item)}>-</button>
                  <span className='cartItemCount'>{item.quantity}</span>
                  <button onClick={()=>handleIncrementCart(item)}>+</button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="finalCartPrice">
              <div>
                <span className="totalLabel">Cart Price:</span>
                <span className="totalValue">${TotalCartPrice().toFixed(2)}</span>
              </div>
              <div>
                <span className="totalLabel">Convenience Fee:</span>
                <span className="totalValue">+ $50.00</span>
              </div>
              <div>
                <span className="totalLabel">Discount:</span>
                <span className="totalValue">- $100.00</span>
              </div>
              <div className="final-total">
                <span className="finalvalue">Total:</span>
                <span className="finalvalue">${FinalCartprice().toFixed(2)}</span>
              </div>
            </div>


          </div>
       
      )}
    </div>
  );
};

export default Cart;
