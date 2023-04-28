const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Data = require("./Model/Data.js")

const app = express()
app.use(express.json())
dotenv.config()



app.get("/api/books",async(req,res)=>{
const products = await Data.find({})
res.json(products)

})

app.post("/api/books",(req,res)=>{
const newData = new Data({
  title:req.body.title,
  body:req.body.descr,
  page:req.body.page
})
newData.save()
res.send(newData)
})

app.get("/api/books/:id",async(req,res)=>{
  const product = await Data.findById(req.params.id)
  res.json(product)
})

app.put("/api/books/:id",async(req,res)=>{
  const {id} = req.params
  const products = await Data.findByIdAndUpdate(id,{
    title:req.body.title,
    body:req.body.descr,
    page:req.body.page
  })
  res.json(products)
})

app.delete("/api/books/:id",async(req,res)=>{
  const product = await Data.findByIdAndDelete(req.params.id)
  res.json(product)
})

mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
}).then(()=>{
  console.log("connect");
})

const PORT = process.env.PORT || 4100

app.listen(PORT,()=>{
  console.log(PORT);
})