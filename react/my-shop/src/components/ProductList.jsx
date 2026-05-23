import { products } from "../data/products"
import ProductCard from "./ProductCard"
function ProductList(){
   
    return(
        <div>
            {products.map(p=>(
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    )
}
export default ProductList