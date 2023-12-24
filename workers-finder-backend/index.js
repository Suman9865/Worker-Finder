const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/workersLists", {
useNewUrlParser: true,
useUnifiedTopology: true
}, () => {
console.log("DB connected")
})

const userSchema= new mongoose.Schema ({
    name: String,
    phone: String,
    password: String,
    city: String,
    address: String,
    amount: Number
    })
const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    res.send("My API login")
    })

app.post("/signup", (req, res) => {
    console.log(req.body);
    })







app.listen (9000, () => {
console.log("BE started at port 9000")
})