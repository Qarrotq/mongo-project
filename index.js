const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")

const app = express()
const PORT = 3000
const bodyParser = require('body-parser')

app.use(cors())
    .use(express.json())
    .use('/',require('./routes/index'))

    const start=async()=>{
        try{
            await mongoose.connect('mongodb+srv://admin:admin@cluster0.vsmgfco.mongodb.net/users',{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            console.log("Connect db success")
            app.listen(PORT)
        }catch(error){
            console.log(error);
        }
      }
    
      start()