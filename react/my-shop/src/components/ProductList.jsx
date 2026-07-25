import { useReducer } from "react";
import cartReducer from "./cartReducer";
export default function ProductList() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
  const products = [
    { id: 1, name: "laptop", price: 1 },
    { id: 2, name: "pc", price: 2 },
    { id: 3, name: "iphone", price: 2 },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <div>{p.name}</div>
          <div>{p.price}</div>
          <button onClick={() => addToCart(p)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}
