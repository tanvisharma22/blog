import React from 'react';
import Loginform from './Loginform';
import './App.css';
import { useState } from 'react';
import Home from './Home';
import { LoginContext } from './LoginContext';

function App() {

 const [showProfile, setShowProfile] = useState(false);
 const [username,setUsername] = useState("");
  return <div className='App'>
    <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
      {showProfile ? <Home /> :<div className='page'> <Loginform /></div>}
    </LoginContext.Provider>
    </div>

  

 
}

export default App;
