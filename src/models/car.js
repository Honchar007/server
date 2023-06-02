const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
  id: String,
  ownerId: String,
  carPicsPath: Array,
  brand: String,
  model: String,
  price: Number,
  volume: Number,
  transmission: String,
  color: String,
  year: Number,
  town: String,
  odometr: Number,
  vincode: String,
  plates: String,
  description: String,
  comments: Array,
  isAvtovukypSale: Boolean,
  datePublication: Date,
});

const CarModel = mongoose.model('car', CarSchema, 'car');

module.exports = CarModel;
