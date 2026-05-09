function SignupForm(){

    return(

        <form action="">
            <h2>Signup Form</h2>
            <input 
            name="username"
            type="text" placeholder="username..." />
            <input 
            name="email"
            type="email" placeholder="email..." />
            <input 
            name="password"
            type="password"  placeholder="password"/>
            <input 
            name="repeatPassword"
            type="password"  placeholder="repeatPassword"/>
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm