const router = require('express').Router()
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const homeController = require('../controllers/homeController')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});
const upload = multer({ dest: 'uploads/',storage: storage });


//to display the files uploaded
router.get('/',homeController.home)
// to upload the files 
router.post('/upload', upload.single('csvfile'),homeController.upload)
// to display the content of the CSV
router.get('/display',homeController.display)



module.exports = router;