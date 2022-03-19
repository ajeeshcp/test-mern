import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Productlist() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/productslist" )
    .then(res=>console.log(res))
    
  }, [])
  
  
  return (
    <div>
      <h2>Product List</h2>
      <table style={{width:"100%"}}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        
      </table>
    </div>
  )
}

export default Productlist