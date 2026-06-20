import useCart from "./useCart";

export default function Cart() {
  const { cart, remove, removeFromCart } = useCart();
  return (
    <div>
      <h2>basket</h2>
      {cart.map((item) => (
        <div>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
