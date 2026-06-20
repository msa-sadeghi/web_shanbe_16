import useCart from "./useCart";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header>
      <h1>shop</h1>
      <span>basket: {totalItems}</span>
    </header>
  );
}
