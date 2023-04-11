const {user} = require('../Modal/formmodal')

exports.formData = async(req,res)=>{
    const {firstname,middlename,lastname,email,phone,address,DOB,fathername,mothername,
        gender,maritalstatus,disability,category,domicile,cast,captcha} = req.body 
    try {
        const data = new user({firstname,middlename,lastname,email,phone,address,DOB,fathername,mothername,
            gender,maritalstatus,disability,category,domicile,cast,captcha})
        await data.save()
        res.status(201).json({message:"Saved"})    
    } catch (error) {
        res.status(400).json({error:"Server Issue"})
    }    
}