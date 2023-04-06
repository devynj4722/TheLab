const mongoose = require('mongoose');
const express = require('express');

const Schema = mongoose.Schema;

const labSchema = new Schema({
    address: {type: String, required: true},
    host: {type: String, required: true},
    date: {type: Date, required: true}
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

  
  module.exports = mongoose.model('User', userSchema);

  module.exports = mongoose.model('Lab', labSchema);