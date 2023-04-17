const express = require('express')

const {registerUniversityAdmin,basicInfo,editInfo,sendEmail,loginUniversityAdmin,
       addProgram,addCollege,send_mail,addApplicant} = require('../Controller/formcontroller')
const router = express.Router()

router.route('/add-adminUniversity').post(registerUniversityAdmin)
router.route('/basic-info').post(basicInfo)
router.route('/edit-info/:id').put(editInfo)
router.route('/send-email').post(sendEmail)
router.route('/login-universityAdmin').post(loginUniversityAdmin)
router.route('/add-program').post(addProgram)
router.route('/add-college').post(addCollege)
router.route('/send-mail').post(send_mail)
router.route('/add-applicant').post(addApplicant)

module.exports = router
