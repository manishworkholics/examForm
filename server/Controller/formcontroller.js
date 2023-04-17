const {user,universityAdmin,program, college,mail,applicant} = require('../Modal/formmodal')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { google } = require ('googleapis')
const config = require('../config/config')
const OAuth2 = google.auth.OAuth2
const OAuth2_client = new OAuth2(config.clientId,config.clientSecret)

OAuth2_client.setCredentials({ refresh_token : config.refreshToken})

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth :{
    type : 'OAuth2',
    user : config.user,
    clientId : config.clientId,
    clientSecret : config.clientSecret,
    refreshToken : config.refreshToken,
  }
})

exports.send_mail = async(req,res)=>{
  const {recipitent,subject,text} = req.body
  // const accessToken = OAuth2_client.getAccessToken()
  
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>${subject}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        /* Put your styles here */
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>Hello!</h1>
      <p>${text}</p>
      <p>Here's a button:</p>
      <p><a href="#" class="button">Click me!</a></p>
    </body>
  </html>
`;
  const mail_options = {
    from : `Sarthak <${config.user}>`,
    to : recipitent, 
    subject : subject,
    html : html
  }

  transporter.sendMail(mail_options, function(error,result){
    if(error){
      console.log('Error :', error)
      res.status(400).json({error:"unable to send mail"})
    }
    else{
      res.status(200).json({message : result })
    }
    transporter.close()
  })
}



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

exports.addApplicant = async(req,res)=>{
  const{firstname,middlename,lastname,email,phone,alternatePhone,
        DOB,username,password,confirmPassword} = req.body
  if(!firstname||!lastname||!email||!phone||!DOB||!username||!password||!confirmPassword){
     return res.status(400).json({error: "Please fill the mandatory fields"})
  }
  try {
    const applicantData = new applicant({firstname,middlename,lastname,email,phone,alternatePhone,
                                          DOB,username,password,confirmPassword})
    await applicantData.save()
    return res.status(201).json(applicantData)                                     
  } catch (error) {
    console.log(error)
    return res.status(400).json({error :"an error occured"})
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
