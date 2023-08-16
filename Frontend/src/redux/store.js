import { configureStore } from '@reduxjs/toolkit'
import {ProductApi} from "../services/getallProduct"
import CartReducer from '../features/product/CartSlice';
import {Subtotal} from "../features/product/CartSlice";

  
export const store = configureStore({
    reducer:{
        Cart:CartReducer,
        [ProductApi.reducerPath]:ProductApi.reducer
    
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(ProductApi.middleware),
    
});
 store.dispatch(Subtotal())


