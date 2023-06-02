const mongoose = require('mongoose');

const BrandModelSchema = mongoose.Schema({
  id: String,
  brand: String,
  models: Array,
});

const BrandModel = mongoose.model('models', BrandModelSchema, 'models');

module.exports = BrandModel;
