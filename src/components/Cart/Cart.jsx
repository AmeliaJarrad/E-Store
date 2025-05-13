import React from 'react'

const Cart = () => {
const total = cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);

  return (
    <div>Cart
        <p>Total: {total} gold</p>
    </div>
    
  )
}

export default Cart