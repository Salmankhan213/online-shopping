import { createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify"


const initialState = {
    cartitems: localStorage.getItem('CartItems')? JSON.parse(localStorage.getItem('CartItems')):[] ,
    totalquantity:0,
    totalamount:0

}

const cartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
           const itemIndex = state.cartitems.findIndex((cartitem)=>cartitem.id === action.payload.id)
           if(itemIndex >=0){
            state.cartitems[itemIndex].cartquantity +=1
            toast.info(`${action.payload.name} increase Quantity`,{
                position :"bottom-left"
            })
           }
           else{
               
               const tempProduct = {...action.payload,cartquantity:1}
               state.cartitems.push(tempProduct)
               toast.success(`${action.payload.name} Add to Cart`,{
                   position :"bottom-left"
            })
        }
        localStorage.setItem('CartItems', JSON.stringify(state.cartitems))
    },
    RemoveItem:(state,action)=>{
        const nextcartItem =  state.cartitems.filter(
            (cartitem)=> cartitem.id !== action.payload.id);
            state.cartitems = nextcartItem
            localStorage.setItem('CartItems' , JSON.stringify(state.cartitems))
            toast.error(`${action.payload.name} Remove to Cart`,{
                position :"bottom-left"
    })
},
 DecreaseCart:(state,action)=>{
    const indexItem = state.cartitems.findIndex((cartitem)=>{
       return cartitem.id === action.payload.id
    })
    if(state.cartitems[indexItem].cartquantity > 1){
        state.cartitems[indexItem].cartquantity -=1

        toast.info(`decreased ${action.payload.name} to Cartquantity`,{
            position :"bottom-left"
})
    } else if (state.cartitems[indexItem].cartquantity === 1){
        const nextcartItem =  state.cartitems.filter(
            (cartitem)=> cartitem.id !== action.payload.id);
            state.cartitems = nextcartItem
           
            toast.error(`${action.payload.name} Remove to Cart`,{
                position :"bottom-left"
    })
    }
    localStorage.setItem('CartItems' , JSON.stringify(state.cartitems))
 },
 clearcart:(state , action)=>{
    state.cartitems = []
    toast.error(` Cart Clear`,{
        position :"bottom-left"
})
  localStorage.setItem('CartItems' , JSON.stringify(state.cartitems))
 },
 Subtotal : (state,action)=>{
   const {total ,quantity} = state.cartitems.reduce((carttotal,cartitem)=>{
        const {price , cartquantity} = cartitem;
        const itemtotal = price * cartquantity;
        carttotal.total += itemtotal
        carttotal.quantity += cartquantity

        return carttotal;

    },{
        total:0,
        quantity:0
    })
    state.totalamount = total;
    state.totalquantity = quantity
 }

}
})
 export const {addtocart , RemoveItem ,DecreaseCart,clearcart, Subtotal} = cartSlice.actions
 export default cartSlice.reducer