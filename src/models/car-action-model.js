const mongoose = require('mongoose');

// Define the CarAction schema
const carActionSchema = new mongoose.Schema({
  id: String,
  PERSON: String,
  REG_ADDR_KOATUU: String,
  OPER_CODE: Number,
  OPER_NAME: String,
  D_REG: String,
  DEP_CODE: Number,
  DEP: String,
  BRAND: String,
  MODEL: String,
  VIN: String,
  MAKE_YEAR: Number,
  COLOR: String,
  KIND: String,
  BODY: String,
  PURPOSE: String,
  FUEL: String,
  CAPACITY: Number,
  OWN_WEIGHT: String,
  TOTAL_WEIGHT: String,
  N_REG_NEW: String,
});

// Create the CarAction model
const CarActionModel = mongoose.model('caractions', carActionSchema, 'caractions');

module.exports = CarActionModel;