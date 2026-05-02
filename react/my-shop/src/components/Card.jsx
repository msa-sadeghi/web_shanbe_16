import "../assets/css/Card.css"
function Card({item, onRemove}){
    return(
         <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.details}</span>
            <button onClick={()=>onRemove(item.id)}>remove</button>
        </li>
    )
}

export default Card