const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/demo').then((data)=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})

 


    