const Test = require('../Models/Test')

exports.list = async(req,res) => {
    try{
        const testObj = await Test.find({}).exec();
        res.send(testObj)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.read = async(req,res) => {
    try{
        const id = req.params.id
        const testObj = await Test.findOne({_id:id}).exec();
        res.send(testObj)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res) => {
    try{
        console.log(req.body)
        const testObj = await Test(req.body).save()
        res.send(testObj)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req,res) => {
    try{
        const id = req.params.id
        const updated = await Test.findOneAndUpdate({_id:id},req.body,{new: true}).exec();
        res.send(updated)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req,res) => {
    try{
        const id = req.params.id
        const removed = await Test.findOneAndDelete({_id:id}).exec();
        res.send(removed)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

