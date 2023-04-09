import React, { useState } from 'react'

const UseStateSimple = () => {
    const [isLogin,isSetLogin]=useState(false);
    const handleLogin=()=>{isSetLogin(true)}
    const handleLogout=()=>{isSetLogin(false)}

  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleLogout} >Logout</button>
        <p>you are { isLogin? "Login":"Logout"}</p>
    </div>
  )
}

export default UseStateSimple