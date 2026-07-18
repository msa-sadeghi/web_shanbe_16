import { useReducer } from "react";
import cartReducer from "./cartReducer";
export default function ShoppingCard() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      { id: 1, name: "laptop", price: 1, quantity: 1 },
      { id: 2, name: "pc", price: 2, quantity: 2 },
      { id: 3, name: "iphone", price: 2, quantity: 3 },
    ],
  });

  const removeFromCart = (pid) => {
    dispatch({ type: "REMOVE_ITEM", payload: pid });
  };

  const updateQuantity = (pid, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: pid, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <h2>Shopping Card</h2>

      {state.items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQuantity(item.id, e.target.value)}
          />
          <span>{item.price * item.quantity} toman</span>
          <button onClick={() => removeFromCart(item.id)}>remove</button>
        </div>
      ))}

      <p>total price: {totalPrice}</p>
      <button onClick={clearCart}>clear cart</button>
    </div>
  );
}
