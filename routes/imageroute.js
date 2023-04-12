const express = require("express");
const imgroute = express.Router();
const mongoose = require('mongoose');
const imgschema = require('../schema/imageschema')
mongoose.connect("mongodb+srv://mobashir:mobashir123@cluster0.sv5dvda.mongodb.net/Grocery?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected with mongodb");
    })
    .catch((err) => {
        console.log(err);
    });


const imgmodel = new mongoose.model("Agumentiksocialmedia", imgschema);

// to create url first time 
imgroute.post("/inserturl", async (req, res) => {
    const bodyData = req.body;
    const name = bodyData.name;
    const url = bodyData.url;
    console.log(name,url);

    const output = await imgmodel.create({
        name,url
    });
    await output.save();

    res.status(200).json({
        success: true,
        output
    })
})

// get all url 
imgroute.get('/getallurl',async(req,res)=>{
    const output = await imgmodel.find();
    res.status(200).json({
        success: true,
        output
    })
})

// update all url 
imgroute.post('/updateurl',async(req,res)=>{
    const bodyData = req.body;
    const id = bodyData._id;
    const output = await model.updateOne({_id:id},{$set:{"user":"admin"}});
    res.status(200).json({
        success: true,
        output
    })
})


module.exports = imgroute;