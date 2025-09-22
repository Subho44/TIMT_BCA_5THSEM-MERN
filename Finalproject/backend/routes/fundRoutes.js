const express = require('express');
const router = express.Router();
const fctrl = require('../controller/fundController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads/"),
    filename:(req,file,cb) =>{
        cb(null,Date.now() + path.extname(file.originalname));

    },
});
const upload = multer({storage});

router.post("/",upload.single("image"),fctrl.createfund);
router.get("/",fctrl.getfund);
router.put("/:id",fctrl.updatefund);
router.delete("/:id",fctrl.deletefund);


module.exports = router;