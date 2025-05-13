import React from 'react'
import classes from './Cart.module.scss'

const Cart = () => {
    const { cartItems } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);

  return (
    <div className={classes.content} >
        <div>
         <h1> Cart </h1> 
        <p>Total: {total} gold</p>
        </div>
    </div>
    
  )
}

export default Cart