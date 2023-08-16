import React from 'react'
import "./cart.css"
import {useSelector , useDispatch} from "react-redux";
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import { RemoveItem , DecreaseCart, addtocart , clearcart,Subtotal} from '../../features/product/CartSlice';



function Cart() {
  const cart = useSelector((state)=>state.Cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(Subtotal());
  },[cart]);

 const handleRemoveitem = (item)=>{
  dispatch(RemoveItem(item))
 }

 const handleDecrease = (cartitem)=>{
  dispatch(DecreaseCart(cartitem))
 }
 const handleIncrease = (cartitem)=>{
  dispatch(addtocart(cartitem))
 }

 const handleclearCart = ()=>{
  dispatch(clearcart())
 }

  return (
   <div className="cart-container">
    <h1> online Shopping Cart</h1>
    {cart.cartitems.length ===0?(
      <div className="cart-empty">
        <p>Your cart is currenty empty</p>
        <div className="start-shopping">
          <Link to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
          fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 
  .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    ):(
     <>
      <div className="titles">
        <h3 className="product-title">Product</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      <div className="cart-items">
        {cart.cartitems?.map((cartitem)=>{
          return (
          <div className="cart-item" key={cartitem.id}>
            <div className="cart-product">
              <img src={cartitem.img} alt={cartitem.name} />
              <div>
                <h3>{cartitem.name}</h3>
                <p>{cartitem.desc}</p>
                <button onClick={()=>handleRemoveitem(cartitem)}>remove</button>
              </div>
            </div>
            <div className="cart-product-price">
              PKR-{cartitem.price}
            </div>
            <div className="cart-product-quantity">
              <button onClick={()=> handleDecrease(cartitem)}>-</button>
              <div className="count">{cartitem.cartquantity}</div>
              <button onClick={()=> handleIncrease(cartitem)}>+</button>
            </div>
            <div className="cart-product-total">{cartitem.price * cartitem.cartquantity}</div>

          </div>
        )})}
      </div>
      <div className="cart-summary">
        <button className="clear-cart" onClick={()=> handleclearCart()}>Clear Cart</button>
        <div className="cart-checkout">
          <div className="subtotal">
            <span>Subtotal</span>
            <span className="amount">PKR-{cart.totalamount}</span>
          </div>
          <p>taxes shipping calculated at checkout</p>
          <button className='btn btn-success'>Check out</button>
          <div className="continue-shopping">
          <Link to={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
          fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 
  .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
            <span>Continue shopping</span>
          </Link>
        </div>

        </div>
      </div>
     </>
    )}

   </div>
  )
}

export default Cart