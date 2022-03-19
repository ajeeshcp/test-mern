import axios from 'axios';
import React,{useState} from 'react' ;


function Addproduct() {

const [product,setProduct] = useState({
    name:"",
    price:"",
    quantity: "",
    category: ""
})
const handleChange = e => {
  const {name,value} = e.target
  setProduct({
  ...product,
  [name]:value
  })
}


const addproduct = ()=>{

  const {name,price,quantity,category} = product ;

    if (name && price && quantity && category) {
    axios.post("http://localhost:3000/addproduct",product )
    .then(res=>console.log(res))
    }
    else{
        alert("invalid input")
    }
}
  return (
    <div className='reg-form'>
        <h2>Add product</h2>
        <div className='input-wrapper'>
            <p className='txt-reg'>Name</p>
            <input type="text" name='name' onChange={handleChange} value={product.name} ></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Price</p>
            <input type="text" name='price' onChange={handleChange} value={product.price}></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Quantity</p>
            <input type="text" name='quantity' onChange={handleChange} value={product.quantity}></input>
            
        </div>
        <div className='input-wrapper'>
            <p className='txt-reg'>Place</p>
            <input type="text" name='category' onChange={handleChange} value={product.category}></input>
            
        </div> 
        <div>
          <button onClick={addproduct}>Submit</button>
        </div>
    </div>
  ) 
}

export default Addproduct ;