const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json)

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("recieved")
})
app.listen(3002,()=>console.log("http://localhost:3002"))