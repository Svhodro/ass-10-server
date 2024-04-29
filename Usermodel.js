const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL)

const ContrySchema=mongoose.Schema({
     img:String,
     contry:String,
     shortdes:String
})


module.exports = mongoose.model("contry",ContrySchema)