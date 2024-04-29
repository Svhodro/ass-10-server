const express = require('express')
const AddTourist=require("./Adddata")
const Usermodel=require("./Usermodel")
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors())
// Assinment10
// QiQeDXciwYjyFcq5
// QiQeDXciwYjyFcq5
// rudrolipi

app.post('/AddData',async (req, res) => {
   const userdata = await AddTourist.create({
    image:req.body.users.url,
    tourists_spot_name:req.body.users.tourists_spot_name,
    country_Name:req.body.users.country_Name,
    location:req.body.users.location,
    shortdescription:req.body.users.description,
    average_cost:req.body.users.average_cost,
    seasonality:req.body.users.seasonality,
    travel_time:req.body.users.travel_time, 
    totaVisitorsPerYear:req.body.users.totaVisitorsPerYear,
    UserEmail:req.body.users.useremail,
    UserName:req.body.users.username
   })
  console.log(userdata)
  
})
//start
// app.get('/Touristdata',(req,res)=>{
//     res.send(user={
//       user:"sporsho",
//       data:"nothing fro you"
//     })
// })
//stat

app.get('/contryData',async(req,res)=>{
  let contry=await Usermodel.find()
  res.send(contry) 
})

app.get('/touristData',async(req,res)=>{
  let tourist=await AddTourist.find()
  res.send(tourist)
})

app.post('/emaillData',async(req,res)=>{
  let data={}
 let  email=req.body.users.email
  let maildata= await AddTourist.find({
    'UserEmail':email}).then((ans) => { 
      data=ans; }) 
      res.send(data)
})

app.post('/delete',async(req,res)=>{
  let Data=req.body.users.Data
  let data=await AddTourist.findOneAndDelete({_id:Data._id})
  res.send("Delete Compleate")
 console.log(data)
})
app.post('/update',async(req,res)=>{
  let Data=req.body.users
  let data=await AddTourist.findOneAndUpdate({_id:Data._id},{

    image:Data.url,    
    tourists_spot_name:Data.tourists_spot_name,    
    country_Name:Data.country_Name,    
    location:Data.location,    
    shortdescription:Data.shortdescription,
    average_cost:Data.average_cost,    
    seasonality:Data.seasonality,    
    travel_time:Data.travel_time,    
    totaVisitorsPerYear:Data.totaVisitorsPerYear,    
    UserEmail:Data.UserEmail,    
    UserName:Data.UserName},{new:true})
  res.send("Update Compleate")
  console.log(data)
})

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
