import React, {  } from 'react'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>Welcome to Homepage </h1>
        <button onClick={navigate("/addproducts")}>Add products</button>
        <button onClick={navigate("/viewproducts")}>View Products</button>

    </div>
  )
}

export default Homepage