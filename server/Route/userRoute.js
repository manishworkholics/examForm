const express = require('express')
const { register, showuser, updateuser, deleteuser, login,addproduct,getproduct,deleteproduct,updateproduct, showorder, addorder } = require('../Controller/usercontroller')
const router = express.Router()
const auth = require("../Middleware/auth")

router.route('/registration').post(register)
router.route('/login').post(login)
router.route('/show-result').get(showuser)
router.route('/show-order').get(showorder)
router.route('/update-result/:id').put( updateuser)
router.route('/delete-user/:id').delete(deleteuser)

router.route('/add-product').post(addproduct)
router.route('/add-order').post(addorder)
router.route('/get-product').get(getproduct)
router.route('/update-product/:id').put( updateproduct)
router.route('/delete-product/:id').delete(deleteproduct)

module.exports = router