


const {user,universityAdmin,program, college} = require('../Modal/formmodal')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const nodemailer = require('nodemailer')
// const {google} = require('googleapis')


exports.registerUniversityAdmin = async(req,res)=>{
  const {firstName,middleName,lastName,email,phone,alternatePhone,post,photo,
         permissions,isBlocked,username,password,houseNo,street,district,country} = req.body
  const userExist = await universityAdmin.findOne({email:email})       
  if(userExist){
    return res.status(400).json({error : "use different email"})
  }
  const userName = await universityAdmin.findOne({username:username})
  if(userName){
    return res.status(400).json({error:"Username is taken"})
  }        
  try {
      const adminData = new universityAdmin({firstName,middleName,lastName,email,phone,alternatePhone,post,
                            photo,permissions,isBlocked,username,password,houseNo,street,district,country})   
      await adminData.save()
      res.status(201).json(adminData)    
  } catch (error) {
      console.log(error)
      res.status(400).json({error:"Server Issue"})
  }    
}

exports.loginUniversityAdmin = async(req,res)=>{
    try {
      const {username,password} = req.body
      if (!username || !password) {
        return res.status(400).json({ error: "please fill the data" });
      }      
      const userlogin = await universityAdmin.findOne({ username: username });
      if(!userlogin){
        return res.status(402).json({error :"username not found" })
      }
      const isMatch = await bcrypt.compare(password,userlogin.password)
      if(!isMatch){
        return res.json({ error : "Invalid Credentials" });
      }
      const token = jwt.sign({userlogin_id: userlogin.id},process.env.JWT_SECRET_KEY)
      res.status(400).json({token})
        
      
    } catch (error) {
      console.log(error)
    }
}

exports.addProgram = async(req,res)=>{
    const {title,description,code,session,eligibility,isEnabled,
          fees,meritPreprationCriteria,isDuplicate} = req.body
    const programExist = await program.findOne({code : code})
    if(programExist){
      return res.status(400).json({error : "Program already exists"})
    }      
    try {
      const programData = new program({title,description,code,session,eligibility,isEnabled,
                                       fees,meritPreprationCriteria,isDuplicate})
      const token = jwt.sign({programData_id: programData.id},process.env.JWT_SECRET_KEY)
      programData.token = token                                    
      await programData.save()
      res.status(201).json(programData)                                 
    } catch (error) {
      console.log(error)
      res.status(400).json({error:"Server Issue"})
    }
}

exports.addCollege = async(req,res)=>{
  const{name,email,contact,address,district,availablePrograms,
        seatsAvailable,collegeAvailable} = req.body
  const collegeExist = await college.findOne({name:name}||{email:email})
  if(collegeExist){
    res.status(401).json({error:"College already exist"})
  }      
  try {
    const collegeData = new college({name,email,contact,address,district,
                                     availablePrograms,seatsAvailable,collegeAvailable})
    await collegeData.save()
    res.status(200).json({message:"College added successfully"})
  } catch (error) {
    console.log(error)
    res.status(400).json({error : "Check all the fields properly"})
  }      
}


exports.basicInfo = async(req,res)=>{
    const {firstname,middlename,lastname,email,phone,address,DOB,fathername,mothername,
        gender,maritalstatus,disability,category,domicile,cast,captcha,yearOfPassing10th,school10th,board10th,
        rollNo10th,subjectDetails10th,totalMarks10th,percentage10th,yearOfPassing12th,school12th,board12th,
        rollNo12th,subjectDetails12th,totalMarks12th,percentage12th,yearOfPassingdiploma,universitydiploma,enrollmentnodiploma,
        finalsemsubjectdiploma,totalMarksdiploma,percentagediploma,profilePicture,signature,domicileCertificate,
        marksheet10th,marksheet12th,aadharCard,selectDepartment,selectBranch,yeargap,applicationfee} = req.body 
    try {
        const data = new user({firstname,middlename,lastname,email,phone,address,DOB,fathername,mothername,
            gender,maritalstatus,disability,category,domicile,cast,captcha,yearOfPassing10th,school10th,board10th,
            rollNo10th,subjectDetails10th,totalMarks10th,percentage10th,yearOfPassing12th,school12th,board12th,
            rollNo12th,subjectDetails12th,totalMarks12th,percentage12th,yearOfPassingdiploma,universitydiploma,enrollmentnodiploma,
            finalsemsubjectdiploma,totalMarksdiploma,percentagediploma,profilePicture,signature,domicileCertificate,
            marksheet10th,marksheet12th,aadharCard,selectDepartment,selectBranch,yeargap,applicationfee})
        const token = jwt.sign({data_id: data.id},process.env.JWT_SECRET_KEY)
        data.token = token    
        await data.save()
        res.status(201).json(data)    
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Server Issue"})
    }    
}

exports.editInfo = async(req,res)=>{
    let data = await user.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(data)
}


exports.sendEmail = async (req, res) => {
    const { email, subject, message } = req.body;
  
    const mailOptions = {
      from: 'sarthaksolanki001@gmail.com',
      to: email,
      subject: subject,
      text: message
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "error occured" });
    }
  };
