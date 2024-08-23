const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = 5000

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes
app.get("/",(req,res)=>{
    res.send("Api running perfectly")
})



app.listen(PORT,()=>{
    console.log("Server Running on http://localhost:"+PORT)
})

