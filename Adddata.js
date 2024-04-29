const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rudrolipi:QiQeDXciwYjyFcq5@cluster0.mj0igoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const AddData=mongoose.Schema({
    image:String,
    tourists_spot_name:String,
    country_Name:String,
    location:String,
    shortdescription:String,
    average_cost:Number,
    seasonality:String,
    travel_time:String, 
    totaVisitorsPerYear:String,
    UserEmail:String,
    UserName:String,


})


module.exports = mongoose.model("Turist",AddData)