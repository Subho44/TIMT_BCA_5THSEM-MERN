const express = require('express');
const router = express.Router();
const fctrl = require('../controller/fundController');


router.post("/",fctrl.createfund);
router.get("/",fctrl.getfund);
router.put("/:id",fctrl.updatefund);
router.delete("/:id",fctrl.deletefund);


module.exports = router;