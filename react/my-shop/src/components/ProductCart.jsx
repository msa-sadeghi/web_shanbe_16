import useCart from "./useCart";

export default function ProductCart({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToCart(product)}>Add To Basket</button>
    </div>
  );
}
