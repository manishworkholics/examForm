const mongoose = require('mongoose')


const formSchema = new mongoose.Schema({
    firstname : {
        type: String,
    },
    middlename : {
        type : String,
    },
    lastname : {
        type: String,
    },
    email : {
        type: String,
    },
    contactcountry : {
        type: String,
    },
    contactnumber : {
        type: String,
    },
    houseno : {
        type: String,
    },
    city : {
        type: String,
    },
    street : {
        type: String,
    },
    pincode : {
        type: String,
    },
    dob : {
        type: String,
    },
    fathername : {
        type: String,
    },
    mothername : {
        type: String,
    },
    gender : {
        type: String,
    },
    maritalstatus : {
        type: String,
    },
    disability: {
        type: String,
    },
    category : {
        type: String,
    },
    domicile : {
        type: String,
    },
    cast : {
        type: String,
    },
    captcha :{
        type : String,
    },
    yearOfPassing10th :{
        type : String,
    },
    school10th :{
        type : String,
    },
    board10th :{
        type : String,
    },
    rollNo10th :{
        type : String,
    },
    subjectDetails10th :[{
        Xsubject1 :{ type : String},
        Xmarks1 :{type : String},
        Xsubject2 :{ type : String},
        Xmarks2 :{type : String},
        Xsubject3 :{ type : String},
        Xmarks3 :{type : String},
        Xsubject4 :{ type : String},
        Xmarks4 :{type : String},
        Xsubject5 :{ type : String},
        Xmarks5 :{type : String}
    }],
    totalMarks10th :{
        type : String,
    },
    percentage10th :{
        type : String,
    },
    yearOfPassing12th :{
        type : String,
    },
    school12th :{
        type : String,
    },
    board12th :{
        type : String,
    },
    rollNo12th :{
        type : String,
    },
    subjectDetails12th :[{
        XIIsubject1 :{ type : String},
        XIImarks1 :{type : String},
        XIIsubject2 :{ type : String},
        XIImarks2 :{type : String},
        XIIsubject3 :{ type : String},
        XIImarks3 :{type : String},
        XIIsubject4 :{ type : String},
        XIImarks4 :{type : String},
        XIIsubject5 :{ type : String},
        XIImarks5 :{type : String}
    }],
    totalMarks12th :{
        type : String,
    },
    percentage12th :{
        type : String,
    },
    yearOfPassingdiploma :{
        type : String,
    },
    universitydiploma :{
        type : String,
    },
    enrollmentnodiploma :{
        type : String,
    },
    finalsemsubjectdiploma :[{
        diplomasubject1 :{ type : String},
        diplomamarks1 :{type : String},
        diplomasubject2 :{ type : String},
        diplomamarks2 :{type : String},
        diplomasubject3 :{ type : String},
        diplomamarks3 :{type : String},
        diplomasubject4 :{ type : String},
        diplomamarks4 :{type : String},
        diplomasubject5 :{ type : String},
        diplomamarks5 :{type : String}
    }],
    totalMarksdiploma :{
        type : String,
    },
    percentagediploma :{
        type : String,
    },
    profilePicture :{
        type : String
    },
    signature :{
        type : String
    },
    domicileCertificate :{
        type : String
    },
    marksheet10th :{
        type : String
    },
    marksheet12th :{
        type : String
    },
    aadharCard :{
        type : String
    },
    selectDepartment :{
        type : String
    },
    selectBranch :{
        type : String
    },
    yeargap : {
        type : String
    },
    applicationfee :{
        type : String
    },
    token :{
        type : String
    },
    status: { type: String, default: 0 },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
})


const user = mongoose.model('form', formSchema)

module.exports = { user }