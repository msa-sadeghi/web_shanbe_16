import { useState } from "react"
import Card from "./Card"
function ShoppingCard(){
    const [items, setItems] = useState([
        {id:1, name :"surface", price:1000, details:"surface pro 11"},
        {id:2, name :"Laptop", price:2000, details:"Laptop Dell"},
        {id:3, name :"Pc", price:1500, details:"Pc pro "},
        
    ])
    const [newName, setNewName] = useState('')
    const handleAdd = ()=>{
        const newItem = {
            id:items.length + 1,
            name:newName,
            price:0,
            details:""
        }
        setItems((prev)=>[...prev,  newItem])
        setNewName("")
    }
    const handleRemove = (id)=>{
        setItems((prev)=> prev.filter((item)=> item.id !== id))
    }

    return(
            <div>
                <input 
                onChange={(e)=>setNewName(e.target.value)}
                style={{padding:"10px 20px", border:"none",
                     borderRadius:"15px"}} 
                type="text" />
                <button onClick={handleAdd}>Add Product</button>
                <ul style={{listStyle:"none"}}>
                    {items.map(item=>(
                       <Card item={item} onRemove={handleRemove}/>
                    ))}
                </ul>
            </div>
        )
}

export default ShoppingCard