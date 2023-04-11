const dotenv = require('dotenv')
const express = require('express')
var multer = require('multer');
const webpush = require('web-push');
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path');
// app.use(cors({ origin: "http://206.189.130.102" }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT;

app.use(express.json())
require('./config/conn')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const register = require('./Route/userRoute')
const showuser = require('./Route/userRoute')
const showorder = require('./Route/userRoute')
const updateuser = require('./Route/userRoute')
const deleteuser = require('./Route/userRoute')
const login = require('./Route/userRoute')
const addproduct = require('./Route/userRoute')
const addorder = require('./Route/userRoute')
const getproduct = require('./Route/userRoute')
const deleteproduct = require('./Route/userRoute')
const updateproduct = require('./Route/userRoute')
const basicInfo = require('./Route/formRoute')

app.use('/api/v1', register)
app.use('/api/v1', showuser)
app.use('/api/v1', showorder)
app.use('/api/v1', updateuser)
app.use('/api/v1', deleteuser)
app.use('/api/v1', login)
app.use('/api/v1', addproduct)
app.use('/api/v1', addorder)
app.use('/api/v1', getproduct)
app.use('/api/v1', deleteproduct)
app.use('/api/v1', updateproduct)
app.use('/api/v1', basicInfo)

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    }),
    limits: { fileSize: 1024 * 1024 * 50 }, // limit file size to 50MB
  });

  app.post('/upload', upload.single('video'), (req, res) => {
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload a video file');
      error.status = 400;
      return next(error);
    }
    
    // construct the response object with the video URL
    const videoUrl = `${req.protocol}://${req.get('host')}/${file.path}`;
    const response = {
      message: 'Video uploaded successfully',
      url: videoUrl,
    };
    
    // return the response
    res.status(201).json(response);
  });

 

  






app.listen(PORT, () => {
    console.log('server start')
})