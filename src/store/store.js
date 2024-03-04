import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartSlice'
import productReducer from './reducers/productReducer'

export const store = configureStore({
  reducer: {
  cartCount : cartReducer,
  productReducer : productReducer
 

  },
})




