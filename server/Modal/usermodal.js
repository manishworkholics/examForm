const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    status: { type: Number, default: 0 },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
})
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirm_password = await bcrypt.hash(this.password, 12);
    }
    next();
})
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        // await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}


const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    }
})
const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    customerId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }]
})
const customerSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const user = mongoose.model('register', userSchema)
const item = mongoose.model('product', itemSchema)
const order = mongoose.model('order', orderSchema)
const customer = mongoose.model('customer', customerSchema)
module.exports = { user, item, order, customer }