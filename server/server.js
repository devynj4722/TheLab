

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Lab = require('./models/schemas')
const User = require('./models/schemas')


app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
// Middle Wares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(express.static(__dirname + '/public'))
const dbstring = "mongodb+srv://jmoneyaae:8dr81uz5SnWZxpWH@dbstorage.hqut4f2.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbstring, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define Passport strategy
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.post('/lab', (req, res)=>{
  try {
   const {Host, address, date} = req.body
   res.json({host: Host, address: address, date:date})
  } catch (error) {
    console.log(error)
  }
})

app.post('/register', (req, res)=>{
  try {
    const {user, password, email, confirmPassword} = req.body
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    res.json({username: user, password: password, email: email})
  } catch (error) {
    console.log(error)
  }
})

app.listen(8081, function(){
  console.log('listening on port 8081')
})