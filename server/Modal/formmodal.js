const mongoose = require('mongoose')


const formSchema = new mongoose.Schema({
    firstname : {
        type: String,
        maxlength :50,
        required: true
    },
    middlename : {
        type : String,
        maxlength :50
    },
    lastname : {
        type: String,
        maxlength :50,
        required: true
    },
    email : {
        type: String,
        maxlength :100,
        required: true
    },
    phone : {
        type: Number,
        required: true    
    },
    address : {
        type: String,
        maxlength : 300,
        required: true
    },
    DOB : {
        type: Date,
        required: true
    },
    fathername : {
        type: String,
        required: true
    },
    mothername : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        enum :['male','female','transgender'],
        required: true
    },
    maritalstatus : {
        type: String,
        enum : ['single','married','widow','widower','divorced','seperated'],
        required: true
    },
    disability: {
        hasDisability: {
          type: Boolean,
          required: true
        },
        disabilityDetails: {
          type: String,
          required: function () {
            return this.hasDisability === true;
          }
        }
    },
    category : {
        type: String,
        enum : ['general','OBC','SCST','AWS'],
        required: true
    },
    domicile : {
        type: String,
        required: true
    },
    cast : {
        type: String,
        required: true
    },
    captcha :{
        type : String,
        required: true
    },
    status: { type: Number, default: 0 },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
})


const user = mongoose.model('form', formSchema)

module.exports = { user }