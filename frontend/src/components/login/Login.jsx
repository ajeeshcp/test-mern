import axios from 'axios'
import React, {  useState } from 'react'
import {useNavigate} from "react-router-dom" ;


function Login({setLoginUser}) {

  const navigate = useNavigate();
  

  const [user,setUser] = useState({
    email:"",
    password: ""
  })

  const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,
  [name]:value
  })
}


const login =()=>{
  axios.post("http://localhost:5000/Login",user)
  .then(res=>{alert(res.data.message)
  setLoginUser(res.data.user)
  navigate("/")})
}

  return (
    <div>
      <div className='reg-form'>
        <h2>Login</h2>
        <div className='input-wrapper'>
            <p className='txt-reg'>Email</p>
            <input type="email" name='email' onChange={handleChange} value={user.email} ></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Password</p>
            <input type="password" name='password' onChange={handleChange} value={user.password}></input>
            
        </div>
          <button onClick={login}>Submit</button>
          <button onClick={() => {navigate("/registration")}}>Registration</button>
        </div>
    </div>
    
  )
}

export default Login