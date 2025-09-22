const Fund = require("../models/Fund");

//insert
exports.createfund = async(req,res)=>{
    try {
        const fund = await Fund.create({
            name:req.body.name,
            type:req.body.type,
            amount:req.body.amount,
            risklevel:req.body.risklevel,
            image:req.file ? req.file.path: "",
            

        });

        res.json(fund);
    } catch(err) {
        res.json(err);
    }
};

//all view

exports.getfund = async(req,res)=>{
    try {
        const funds = await Fund.find();
        res.json(funds);
    } catch(err) {
        res.json(err);
    }
};
//update
exports.updatefund = async(req,res)=>{
    try {
        const fund = await Fund.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(fund);
    } catch(err) {
        res.json(err);
    }
};
//delete
exports.deletefund = async(req,res)=>{
    try {
        await Fund.findByIdAndDelete(req.params.id);
        res.json({message:"fund deleted successfully"});
    } catch(err) {
        res.json(err);
    }
};