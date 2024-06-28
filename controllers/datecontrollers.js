const  DateC = require('../model/datemodel')
const mongoose = require('mongoose')
// get all
const  getdates = async (req,res) =>{
    const getdates = await DateC.find({}).sort({createAt: -1})
    res.status(200).json(getdates)
}

// get single
const getdate = async (req ,res) =>{
    const {id} =  req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such data"})
    }
    
    const dates = await DateC.findById(id)
    if(!dates){
        return res.status(404).json({error: 'no such data'})
    }
    res.status(200).json(dates)
}

//create new
 const createdate = async ( req, res) => {
    const{title,load,reps} =req.body

    try{
        const calendate = await DateC.create({title, load, reps})
        res.status(200).json(calendate)
    } catch(error){
        res.status(400).json({error: error.message})
    }

 }

//delete
const deletedate = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such data"})
    }
    const dates = await DateC.findOneAndDelete({_id: id})
    if(!dates){
        return res.status(404).json({error: 'no such data'})
    }
    res.status(200).json(dates)
}

//update
const updatedate = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such date'})
    }
    const dates = await DateC.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!dates){
        return res.status(404).json({error: 'no such data'})
    }
    res.status(200).json(dates)

}


module.exports = {
    getdate,
    getdates,
    createdate,
    deletedate,
updatedate}