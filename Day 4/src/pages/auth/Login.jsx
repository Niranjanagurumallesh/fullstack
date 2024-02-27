import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/asset1.png';
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      
      console.log("Username:", username);
      console.log("Password:", password);
    }; 
  return (
    <div>
    <img src={Logo} height={"60px"}/>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{marginTop:"20%"}}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{marginBottom:"15%"}}

            />
            <div style={{display:"flex"}}>
            <Link to='/reign/user/home'> <input type="submit" value="Login" style={{marginLeft:"70px"}}/></Link>
            <p className='regi'><Link to="/reign/register" style={{color:'white'}} > Register </Link></p>
            </div>
          </form>
        </div>
  </div>
  )
}

