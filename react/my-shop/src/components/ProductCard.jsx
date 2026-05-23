function ProductCard({product}){
    
    return(
        <div>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>price : {product.price}</p>
            <select name="" id="">
                {product.colors.map(c=>(
                    <option value="">{c}</option>
                ))}
            </select>
        </div>
    )
}
export default ProductCard