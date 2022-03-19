import axios from 'axios';
import React,{useState} from 'react' ;
import "./Registration.css" ;
import {useNavigate} from "react-router-dom"


function Registration() {
  
  const navigate = useNavigate()

const [user,setUser] = useState({
    name:"",
    email:"",
    password: "",
    place: ""
})
const handleChange = e => {
  const {name,value} = e.target
  setUser({
  ...user,
  [name]:value
  })
}

const reset = () =>{
  setUser({
    name:"",
    email:"",
    password: "",
    place: ""
  })
}

const register = ()=>{

  const {name,email,password,place} = user ;

    if (name && email && password && place) {
    axios.post("http://localhost:5000/Register",user )
    .then(res=>{
      alert(res.data.message)
      if(res.data.user){
        navigate("/")
      }
    })
    }
    else{
        alert("invalid input")
    }
}
  return (
    <div className='reg-form'>
        <h2>Registration</h2>
        <div className='input-wrapper'>
            <p className='txt-reg'>Name</p>
            <input type="text" name='name' onChange={handleChange} value={user.name} ></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Email</p>
            <input type="email" name='email' onChange={handleChange} value={user.email}></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Password</p>
            <input type="password" name='password' onChange={handleChange} value={user.password}></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Place</p>
            <input type="password" name='place' onChange={handleChange} value={user.place}></input>
            
        </div> 
        <div>
          <button onClick={register}>Submit</button>
          <button onClick={reset}>Clear</button>
        </div>
    </div>
  ) 
}

export default Registration