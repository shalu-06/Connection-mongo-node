const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:"Required"},
    courseFee:{
            type:String
        }
})

mongoose.model('Course',courseSchema)