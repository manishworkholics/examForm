const { user, item, order, customer } = require('../Modal/usermodal')
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "please filled the field properly" })
    }
    try {
        const userExist = await user.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email is already exist" });
        }
        else {
            const admins = new user({ name, email, phone, password });
            await admins.save();
            res.status(201).json({ message: "admin register successfuly" });
        }
    } catch (error) {
        console.log(error)
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please filled the data" });
        }
        const userlogin = await user.findOne({ email: email });

        const isMatch = await bcrypt.compare(password, userlogin.password);

        const token = await userlogin.generateAuthToken();


        if (!isMatch) {
            res.status(400).json({ error: "invalid credentials" });
        } else {
            res.json({ token });
        }

    } catch (error) {
        console.log(error)
    }
}
exports.showuser = async (req, res) => {
    const data = await user.find()
    res.send(data)
}
exports.deleteuser = async (req, res) => {
    const data = await user.deleteOne({ _id: req.params.id })
    res.send(data)
}
exports.updateuser = async (req, res) => {
    let data = await user.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(data)
}

exports.addproduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const product = new item({ name, price, description });
        await product.save();
        res.status(201).json({ message: "product added successfuly" });
    } catch (error) {
        console.log(error)
    }
}

exports.getproduct = async (req, res) => {
    const data = await item.find()
    res.send(data)
}
exports.deleteproduct = async (req, res) => {
    const data = await item.deleteOne({ _id: req.params.id })
    res.send(data)
}
exports.updateproduct = async (req, res) => {
    let data = await item.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(data)
}

exports.addorder = async (req, res) => {
    const { name, price, description, customerId } = req.body;
    try {
        const data = new order({ name, price, description, customerId });
        await data.save();
        res.status(201).json({ message: "order added successfuly" });
    } catch (error) {
        console.log(error)
    }
}
exports.showorder = async (req, res) => {
    order.find().populate('customerId').exec((err,orders)=>{
        if (err) {
            console.log(err);
            return;
           
          }
          res.send(orders);
    })
   
}