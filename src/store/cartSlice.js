import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: {
    
    addItem: (state, action) => {
      const existingItem=state.cartItems.find((item) => item.id === action.payload.id);
      if(existingItem){
        existingItem.quantity += 1;
      }
      else{
        state.cartItems.push({...action.payload,quantity:1});
      }
    },
    DecrementItem: (state, action) => {
      const existingItem=state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; 
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        }
      }
       
    },
    removeItem:(state,action)=>{
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    }
  },
});


export const { addItem, removeItem,DecrementItem } = cartSlice.actions;


export default cartSlice.reducer;
