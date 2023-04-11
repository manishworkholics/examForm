const {user} = require('../Modal/formmodal')

exports.basicInfo = async(req,res)=>{
    const {firstname,middlename,lastname,email,contactcountry,contactnumber,houseno,city,street,pincode,dob,fathername,mothername,
        gender,maritalstatus,disability,category,domicile,cast,captcha,yearOfPassing10th,school10th,board10th,
        rollNo10th,subjectDetails10th,totalMarks10th,percentage10th,yearOfPassing12th,school12th,board12th,
        rollNo12th,subjectDetails12th,totalMarks12th,percentage12th,yearOfPassingdiploma,universitydiploma,enrollmentnodiploma,
        finalsemsubjectdiploma,totalMarksdiploma,percentagediploma,profilePicture,signature,domicileCertificate,
        marksheet10th,marksheet12th,aadharCard,selectDepartment,selectBranch,yeargap,applicationfee} = req.body 
    try {
        const data = new user({firstname,middlename,lastname,email,contactcountry,contactnumber,houseno,city,street,pincode,dob,fathername,mothername,
            gender,maritalstatus,disability,category,domicile,cast,captcha,yearOfPassing10th,school10th,board10th,
            rollNo10th,subjectDetails10th,totalMarks10th,percentage10th,yearOfPassing12th,school12th,board12th,
            rollNo12th,subjectDetails12th,totalMarks12th,percentage12th,yearOfPassingdiploma,universitydiploma,enrollmentnodiploma,
            finalsemsubjectdiploma,totalMarksdiploma,percentagediploma,profilePicture,signature,domicileCertificate,
            marksheet10th,marksheet12th,aadharCard,selectDepartment,selectBranch,yeargap,applicationfee})
        await data.save()
        res.status(201).json({message:"Saved"})    
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