const express = require('express');
const router = express.Router();
const categoryController=require("../controller/category.controller");
const multer = require('multer');
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now()+file.originalname);
    }
});
var upload=multer({storage: storage});

router.post('/add-category',upload.single('catImage'),categoryController.addCategory);

module.exports = router;
