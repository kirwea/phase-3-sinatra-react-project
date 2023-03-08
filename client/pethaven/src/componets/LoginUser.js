import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react"
import axios from "axios";
import { useStore } from "zustand";
//import {  petsStore } from "../data/PetsKeeper";
import { petsStore } from "../Data/PetsKeeper";

function Login() {
  const pets = useStore(petsStore)
  const [users,setUsers] = useState([])
  console.log(users)
  useEffect(()=>{
   axios.get("https://pets-advanced.onrender.com").then((r) =>
    setUsers(r.data)
   )
  },[])
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  
  const redirect = useNavigate();
  const handleSubmit = (e) => {
     e.preventDefault();
    //map through the users array
    let exixting_user = users.filter((user) =>{
      return user.username === login.username
    })
    if(exixting_user.length !== 0){
    if(exixting_user[0].password === login.password){
    
      axios.get(`https://pets-advanced.onrender.com/pets/${exixting_user[0].username}`).then((r) =>{
      if(r.data.length === 0){
        pets.setPetsStore([{
        id:null,
        name:"",
        breed:"",
        image_url:"",
        user_id:exixting_user[0].id
            }]) 
            redirect("/mypets")}else{
        console.log(r.data)
        pets.setPetsStore(r.data) 
        redirect("/mypets")} 
      }    
      )
 
    }else{
      alert("Incorrect password")
    }}else{
      alert("Incorrect username")
    }
  
   
  };
  return (
    <div >
    <form onSubmit={handleSubmit} className="signin">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setLogin({ ...login, username: e.target.value })}
      ></input>
      <input type="password" placeholder="password" onChange={(e) => setLogin({
        ...login, password:e.target.value
      })} ></input>
      <button >Login</button>
    </form>
    </div>
  );
}
export default Login