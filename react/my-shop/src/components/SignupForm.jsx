import { useState } from "react"

function SignupForm(){
    const  [formData, setFormData] = useState({
        "username":"",
        "email":"",
        "password":"",
        "rePassword":""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        setFormData( {...formData,  [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(formData.username.length < 3){
            setErrors({'username':'username length must be greaterh than 3'})
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Signup Form</h2>
            <input
            onChange={handleChange} 
            name="username"
            type="text" placeholder="username..." />
            {errors.username ? errors.username : ''}
            <input 
            onChange={handleChange} 
            name="email"
            type="email" placeholder="email..." />
            <input 
            onChange={handleChange} 
            name="password"
            type="password"  placeholder="password"/>
            <input 
            onChange={handleChange} 
            name="repeatPassword"
            type="password"  placeholder="repeatPassword"/>
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm