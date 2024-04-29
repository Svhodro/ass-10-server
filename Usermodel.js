const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rudrolipi:QiQeDXciwYjyFcq5@cluster0.mj0igoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const ContrySchema=mongoose.Schema({
     img:String,
     contry:String,
     shortdes:String
})


module.exports = mongoose.model("contry",ContrySchema)