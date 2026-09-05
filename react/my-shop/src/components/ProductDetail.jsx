import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  if (!product) {
    return <p>در حال بارگذاری...</p>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
}
