import { useState } from "react";
import Register from "../components/RegisterUsers";
import Login from "../components/LoginUser";

function Home() {
  const [displayRegister,displayLogin] = useState(true)
  const changeForm = () =>{
    displayLogin(!displayRegister)
  }
if(displayRegister === true){
  return (<>
    <h1>Pethaven</h1>
    <Register changeForm={changeForm}/>
    <p onClick={changeForm} className="lUser">Already registered? 
    <div className="hover">
    Go to login
    </div>
    </p>
    
    </>);
}else{
  return (<>
    <h1 >Pethaven</h1>
    <Login changeForm={changeForm}/>
    </>);
}
}

export default Home;