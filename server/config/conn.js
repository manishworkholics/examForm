const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sarthaksolanki001:1234@cluster0.uretuce.mongodb.net/test').then((data)=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})

