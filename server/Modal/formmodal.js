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
        subject1 :{ type : String},
        marks :{type : String},
        subject2 :{ type : String},
        marks :{type : String},
        subject3 :{ type : String},
        marks :{type : String},
        subject4 :{ type : String},
        marks :{type : String},
        subject5 :{ type : String},
        marks :{type : String}
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
        subject1 :{ type : String},
        marks :{type : String},
        subject2 :{ type : String},
        marks :{type : String},
        subject3 :{ type : String},
        marks :{type : String},
        subject4 :{ type : String},
        marks :{type : String},
        subject5 :{ type : String},
        marks :{type : String}
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
        subject1 :{ type : String},
        marks :{type : String},
        subject2 :{ type : String},
        marks :{type : String},
        subject3 :{ type : String},
        marks :{type : String},
        subject4 :{ type : String},
        marks :{type : String},
        subject5 :{ type : String},
        marks :{type : String}
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
    status: { type: String, default: 0 },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
})


const user = mongoose.model('form', formSchema)

module.exports = { user }