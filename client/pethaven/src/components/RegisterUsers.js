import { useState } from "react"
import axios from "axios"
//
function Register({changeForm}){
    const [newPetOwner,setnewPetOwner] = useState({
        "username" :"",
        "password" : ""
    })
    console.log(newPetOwner)
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9292/pets",newPetOwner)
        changeForm()
    }
    return(
        
        <form onSubmit={handleSubmit} className="signup">
            <h2 className="sign">Sign Up</h2>
            <lable htmlFor="Enter Username">
            <input type="text" placeholder="username"onChange={(e) => setnewPetOwner({...newPetOwner,username:e.target.value})} className="username"></input>
            </lable>
            <lable htmlFor="password">
            <input type="password" placeholder=" password"  onChange={(e) => setnewPetOwner({...newPetOwner,password:e.target.value})} className="password"></input>
            </lable>

            <button className="register">Register</button>
        </form>
        
    )
    }

export default Register