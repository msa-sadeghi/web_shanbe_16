import { useReducer } from "react";
import cartReducer from "./cartReducer";
export default function ShoppingCard() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (pid) => {
    dispatch({ type: "REMOVE_ITEM", payload: pid });
  };

  const updateQuantity = (pid, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: pid, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
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
            // onChange={(e)=>}
          />
          <span>{item.price * item.quantity} toman</span>
          <button>remove</button>
        </div>
      ))}

      <p>total price: </p>
      <button>clear cart</button>
    </div>
  );
}
