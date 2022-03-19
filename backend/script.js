
const express = require("express");
const cors = require("cors") ;
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    place:String
})

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
    category:String
})

const User = new mongoose.model("User", userSchema);
const Product = new mongoose.model("Product",productSchema)

//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    console.log(email,password);
    User.find({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password,place} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist",user:true})
        }else {
            const user = new User({name,email,password,place})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
   

}) 
app.post("/addproduct",(req,res)=>{

    console.log(req.body) ;
    const { name,price,quantity,category } = req.body ;

    const product = new Product({ name,price,quantity,category })
    product.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"sucessfull"})
        }
    })
   
}) 

app.listen(5000,()=>{
    console.log("started")
})