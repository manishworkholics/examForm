const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const universityAdminSchema = new mongoose.Schema({
    firstName : {
        type : String,
    },
    middleName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type: Number
    },
    alternatePhone :{
        type : Number
    },
    post : {
        type : String
    },
    photo : {
        type : String
    },
    permissions : [{
        type : String
    }],
    isBlocked : {
        type : Boolean
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    houseNo : {
        type : String
    },
    street : {
        type : String
    },
    district : {
        type : String
    },
    country : {
        type : String
    }, 
   
})
universityAdminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirm_password = await bcrypt.hash(this.password, 10);
    }
    next();
})
const collegeSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    contact : {
        type : Number
    },
    address : {
        type : String
    },
    district : {
        type : String
    },
    availablePrograms : [{
        type : String
    }],
    seatsAvailable : {
        type : Number
    },
    collegeAvailable : {
        type : Boolean
    },
})
const programSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    code : {
        type : String
    },
    session : [{
        from : { type : Date },
        to :{ type : Date }
    }],
    eligibility :{
        type : String
    },
    isEnabled : {
        type : Boolean
    },
    fees : {
        type : String
    },
    meritPreprationCriteria : {
        type : String
    },
    isDuplicate : {
        type : Boolean
    },
    token : {
        type : String
    }
})


const applicantSchema = new mongoose.Schema({
    firstname : {
        type: String,
        require : true
    },
    middlename : {
        type : String
    },
    lastname : {
        type: String,
        require : true
    },
    email : {
        type: String,
        require : true
    },
    phone : {
        type: String,
        require : true
    },
    alternatePhone :{
        type : String
    },
    // address : {
    //     type: String
    // },
    DOB : {
        type: String,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    confirmPassword : {
        type : String,
        require : true
    },
    // fathername : {
    //     type: String
    // },
    // mothername : {
    //     type: String
    // },
    // gender : {
    //     type: String
    // },
    // maritalstatus : {
    //     type: String
    // },
    // disability: {
    //     type: String
    // },
    // category : {
    //     type: String
    // },
    // domicile : {
    //     type: String
    // },
    // cast : {
    //     type: String
    // },
    // captcha :{
    //     type : String,
    // },
    // yearOfPassing10th :{
    //     type : String
    // },
    // school10th :{
    //     type : String
    // },
    // board10th :{
    //     type : String
    // },
    // rollNo10th :{
    //     type : String
    // },
    // subjectDetails10th :[{
    //     Xsubject1 :{ type : String},
    //     Xmarks1 :{type : String},
    //     Xsubject2 :{ type : String},
    //     Xmarks2 :{type : String},
    //     Xsubject3 :{ type : String},
    //     Xmarks3 :{type : String},
    //     Xsubject4 :{ type : String},
    //     Xmarks4 :{type : String},
    //     Xsubject5 :{ type : String},
    //     Xmarks5 :{type : String}
    // }],
    // totalMarks10th :{
    //     type : String,
    // },
    // percentage10th :{
    //     type : String,
    // },
    // yearOfPassing12th :{
    //     type : Date,
    // },
    // school12th :{
    //     type : String,
    // },
    // board12th :{
    //     type : String,
    // },
    // rollNo12th :{
    //     type : String,
    // },
    // subjectDetails12th :[{
    //     XIIsubject1 :{ type : String},
    //     XIImarks1 :{type : String},
    //     XIIsubject2 :{ type : String},
    //     XIImarks2 :{type : String},
    //     XIIsubject3 :{ type : String},
    //     XIImarks3 :{type : String},
    //     XIIsubject4 :{ type : String},
    //     XIImarks4 :{type : String},
    //     XIIsubject5 :{ type : String},
    //     XIImarks5 :{type : String}
    // }],
    // totalMarks12th :{
    //     type : String,
    // },
    // percentage12th :{
    //     type : String,
    // },
    // yearOfPassingdiploma :{
    //     type : String,
    // },
    // universitydiploma :{
    //     type : String,
    // },
    // enrollmentnodiploma :{
    //     type : String,
    // },
    // finalsemsubjectdiploma :[{
    //     diplomasubject1 :{ type : String},
    //     diplomamarks1 :{type : String},
    //     diplomasubject2 :{ type : String},
    //     diplomamarks2 :{type : String},
    //     diplomasubject3 :{ type : String},
    //     diplomamarks3 :{type : String},
    //     diplomasubject4 :{ type : String},
    //     diplomamarks4 :{type : String},
    //     diplomasubject5 :{ type : String},
    //     diplomamarks5 :{type : String}
    // }],
    // totalMarksdiploma :{
    //     type : String,
    // },
    // percentagediploma :{
    //     type : String,
    // },
    // profilePicture :{
    //     type : String
    // },
    // signature :{
    //     type : String
    // },
    // domicileCertificate :{
    //     type : String
    // },
    // marksheet10th :{
    //     type : String
    // },
    // marksheet12th :{
    //     type : String
    // },
    // aadharCard :{
    //     type : String
    // },
    // selectDepartment :{
    //     type : String
    // },
    // selectBranch :{
    //     type : String
    // },
    // yeargap : {
    //     type : String
    // },
    // applicationfee :{
    //     type : String
    // },
    // token :{
    //     type : String
    // },
    status: { type: String, default: 0 },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
})

const mailSchema = new mongoose.Schema({
    name : {
        type : String
    },
    recipitent : {
        type : String
    },
    subject : {
        type : String
    },
    text : {
        type : String
    }
})
const universityAdmin = mongoose.model('registerAdmin', universityAdminSchema)
const program = mongoose.model('program',programSchema)
const college = mongoose.model('college', collegeSchema)
const applicant = mongoose.model('form', applicantSchema)
const mail =  mongoose.model('mail', mailSchema)

module.exports = { universityAdmin, program, college,mail, applicant }