import React from 'react'
import { useCart } from '../../context/CartProvider';
import cartBackground from '../../assets/Wagon.webp'
import classes from './CartPage.module.scss'; 


const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.Price * item.quantity, 0);
 
    return (
    <section  className={classes.cart} style={{ backgroundImage: `url(${cartBackground})` }}>
        <div className={classes.cartContent}>
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
                  max={item.Quantity}
                  value={item.quantity}
                  onChange={(e) => {
                    const newQty = parseInt(e.target.value);
                    if (newQty <= item.Quantity) {
                        updateQuantity(item.id, newQty);
                    } else {
                        toast.warning(`Only ${item.Quantity} in stock`)
                    }
                }}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>

          <p>Total: {total} gold</p>
        </>
      )}
      </div>
    </section>
  )
}

export default CartPage