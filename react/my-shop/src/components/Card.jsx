import "../assets/css/Card.css"
function Card({item}){
    return(
         <li key={item.key}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.details}</span>
            <button>remove</button>
        </li>
    )
}

export default Card