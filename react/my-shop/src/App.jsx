import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <Cart />
        <ProductList />
      </CartProvider>
    </div>
  );
}

export default App;
