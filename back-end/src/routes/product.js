const express = require ('express');
const { create } = require('../models/user');

const { default: slugify } = require('slugify');
const { createProduct } = require('../controller/product');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const Product = require ('../models/product');
const multer = require ('multer');
const shortid = require('shortid');
const path = require('path');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join((path.dirname(__dirname)), 'uploads' ))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);
    // const { } = req.body
   

// router.get('/category/getcategory', getCategories);   

module.exports = router;