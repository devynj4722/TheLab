

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Lab = require('./models/schemas')



app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
const dbstring = "mongodb+srv://jmoneyaae:8dr81uz5SnWZxpWH@dbstorage.hqut4f2.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbstring, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));




app.post('/lab', (req, res)=>{
  try {
   const {Host, address, date} = req.body
   res.json({host: Host, address: address, date:date})
  } catch (error) {
    console.log(error)
  }
})

app.listen(8081, function(){
  console.log('listening on port 8081')
})
