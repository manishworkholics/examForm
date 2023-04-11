const express = require('express')

const {basicInfo,editInfo} = require('../Controller/formcontroller')
const router = express.Router()

router.route('/basic-info').post(basicInfo)
router.route('/edit-info/:id').put(editInfo)
module.exports = router
