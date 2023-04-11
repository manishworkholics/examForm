const express = require('express')

const {basicInfo} = require('../Controller/formcontroller')
const router = express.Router()

router.route('/basic-info').post(basicInfo)

module.exports = router



