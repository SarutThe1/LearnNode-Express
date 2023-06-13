const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://admin:1234@cluster0.nsfrdkr.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB connect successfully')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB