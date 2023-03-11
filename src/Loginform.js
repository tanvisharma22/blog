import React, {  useContext } from "react";
import { LoginContext } from "./LoginContext";
import "./Loginform.css";



function Loginform() {

  const {setUsername, setShowProfile} = useContext(LoginContext);
   
  return (
    <div className="login">
       <h1>Login</h1>
       <input type = "text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}} />
       <input type = "password" placeholder="Password"  />

       <div className="login-btn" onClick={() => {setShowProfile (true)}
    }>Log In</div>

       

       
    </div>
  )
}

export default Loginform;