import ProductCard from "./ProductCart.jsx";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "لپ‌تاپ",
      price: 25000000,
    },
    {
      id: 2,
      name: "ماوس",
      price: 500000,
    },
    {
      id: 3,
      name: "کیبورد",
      price: 1500000,
    },
  ];

  return (
    <div>
      <h2>محصولات</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
