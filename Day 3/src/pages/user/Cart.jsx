import React, { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 3 }
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ marginBottom: '20px' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
