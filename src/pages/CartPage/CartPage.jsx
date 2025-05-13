import React from 'react'
import { useCart } from '../../context/CartProvider';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);
 
    return (
    <section>
        <h1> Your Cart</h1>
        {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.Name} — {item.Price} gold
                
                <br />
                Quantity: 
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>

          <p>Total: {total} gold</p>
        </>
      )}
    </section>
  )
}

export default CartPage